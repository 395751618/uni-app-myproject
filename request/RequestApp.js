const HOST = 'http://99plas-mobile-develop.mindertech.net/api/';

//网络判断
const hasNetwork = function() {
	var result = true;
	uni.getNetworkType({
		success: function(res) {
			// console.log("网络类型:" + res.networkType);
			if (res.networkType == "none") {
				uni.showToast({
					title: "网络未连接",
					icon: 'none'
				});
				result = false;
			}
		}
	});
	return result;
}

const sendRequest = function(url, method, data, header) {
	var promise = new Promise(function(resolve, reject) {
		uni.request({
			url: url,
			data: data,
			header: header,
			success: function(res) {
				console.log(res.data)
				if (res.statusCode == 200) {
					resolve(res.data.data)
				} else {
					reject(res.data.data)
				}
			},
			fail: function(res) {
				var error = {"code": 0, "data": {}, "message": res.errMsg}
				reject(error)
			}
		})
	})
	console.log(url)
	return promise
}

const getData = function(url, data) {
	var header = {
		"Accept-Language": "zh-cn",
		"Accept": "application/json",
		"X-app-id": "buyer"
	}
	return sendRequest(HOST + url, 'GET', data, header)
}

const postData = function(url, data) {
	var header = {
		"Accept-Language": "zh-cn",
		"Accept": "application/json",
		"X-app-id": "supplier"
	}
	return sendRequest(HOST + url, 'POST', data, header)
}

export default {
	sendRequest,
	getData,
	postData,
	apis: {
		banner() {
			return getData("banner", {})
		},
		recentDeal() {
			return getData("load/recent-deal", {})
		},
		latest() {
			return getData("load/latest", {})
		},
		checkUpdate(data) {
			return getData("check-update", data)
		},
		listingList(data) {
			return getData("load/index", data)
		}
	}
}

