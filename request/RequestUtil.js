const config = Symbol('config')
const isCompleteURL = Symbol('isCompleteURL')
const requestBefore = Symbol('requestBefore')
const requestAfter = Symbol('requestAfter')

class RequestUtil {

	static[requestBefore](config) {
		return config
	}

	static[requestAfter](response) {
		return response
	}

	static[isCompleteURL](url) {
		return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
	}

	setConfig(func) {
		this[config] = func(this[config])
	}

	[config] = {
		baseURL: '',
		header: {
			'content-type': 'application/json'
		},
		method: 'GET',
		requestType: 'json',
		responseType: 'text'
	}

	// 拦截器
	interceptors = {
		request: (func) => {
			if (func) {
				RequestUtil[requestBefore] = func
			} else {
				RequestUtil[requestBefore] = (request) => request
			}

		},
		response: (func) => {
			if (func) {
				RequestUtil[requestAfter] = func
			} else {
				RequestUtil[requestAfter] = (response) => response
			}
		}
	}

	request(options = {}) {
		options.baseURL = options.baseURL || this.config.baseURL
		options.dataType = options.dataType || this.config.dataType
		options.url = RequestUtil.isCompleteURL(options.url) ? options.url : (options.baseURL + options.url)
		options.data = options.data
		options.header = {
			...options.header,
			...this.config.header
		}
		options.method = options.method || this.config.method

		options = {
			...options,
			...RequestUtil.requestBefore(options)
		}

		return new Promise((resolve, reject) => {
			options.success = function(res) {
				resolve(RequestUtil.requestAfter(res))
			}
			options.fail = function(err) {
				reject(RequestUtil.requestAfter(err))
			}
			uni.request(options)
		})
	}

	get(url, data, options = {}) {
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	}

	post(url, data, options = {}) {
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	}
}

RequestUtil.install = function(Vue) {
	// Vue.mixin({
	// 	beforeCreate: function () {
	// 		if (this.$options.minRequest) {
	// 			console.log(this.$options.minRequest)
	// 			Vue._minRequest = this.$options.minRequest
	// 		}
	// 	}
	// })
	// Object.defineProperty(Vue.prototype, '$api', {
	// 	get: function () {
	// 		return Vue._minRequest.apis
	// 	}
	// })
	Vue.mixin({
		beforeCreate: function() {
			if (this.$options.request) {
				console.log(this.$options.request)
				Vue.request = this.$options.request
			}
		}
	})
	Object.defineProperty(Vue.prototype, '$api', {
		get: function() {
			return Vue.request.apis
		}
	})
}

export default RequestUtil
