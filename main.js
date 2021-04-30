import Vue from 'vue'
import App from './App'

import http from './request/request.js'
Vue.prototype.$http = http;

import RequestUtil from 'request/RequestUtil'
import request from 'request/api.js'
Vue.use(RequestUtil)
Vue.prototype.$request = request

import i18nMsg from './common/i18n/xxi18n.js'
Vue.prototype.$i18nMsg = i18nMsg;

import filters from './common/filters/filters.js'
Vue.use(filters)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()