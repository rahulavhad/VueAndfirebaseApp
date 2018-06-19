// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

require('../node_modules/bootstrap/less/bootstrap.less')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

let app
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyABxHAtkNty-QQJ_OEnlgk12llZR_YqQ90',
  authDomain: 'medico-ae818.firebaseapp.com',
  databaseURL: 'https://medico-ae818.firebaseio.com',
  projectId: 'medico-ae818',
  storageBucket: '',
  messagingSenderId: '617883555981'
}
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      component: { App },
      router
    })
  }
})
