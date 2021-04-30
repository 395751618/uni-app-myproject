import Vue from 'vue'
import VueI18n from 'vue-i18n' 

const LOCALE_KEY = 'lang';

const currentLanguage = function() {
	if (uni.getStorageSync(LOCALE_KEY) == (undefined || "" || null)) {
		let language = uni.getSystemInfoSync().language
		if (language.substr(0, 2) == "zh") {
		    return 'zh'
		}
		return 'en'
	}
	return uni.getStorageSync(LOCALE_KEY)
}

Vue.use(VueI18n)
Vue.config.productionTip = false
const i18n = new VueI18n({
    locale : currentLanguage(), //语言标识
    messages: {
        'en' : require('common/language/en.js'),
        'zh' : require('common/language/zh.js')
    }
})
Vue.prototype._i18n = i18n

const i18nMsg = function() {
	return i18n.messages[i18n.locale]
}

const locale = function() {
	return i18n.messages[i18n.locale]
}

const enLanguage = function() {
	i18n.locale = 'en'
	uni.setStorageSync(LOCALE_KEY, 'en');
}

const zhLanguage = function() {
	i18n.locale = 'zh'
}

export default {
	i18nMsg,
	locale,
	currentLanguage,
	enLanguage,
	zhLanguage
}