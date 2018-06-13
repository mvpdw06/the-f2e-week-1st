import 'babel-polyfill'

import './index.sass'

import Vue from 'vue'
import ElementUI from 'element-ui'
import app from './app/app.vue'

Vue.use(ElementUI)

var vm = new Vue({
  el: '#app',
  render: h => h(app)
})
