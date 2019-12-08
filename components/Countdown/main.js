import Vue from 'vue'
import App from '~/components/Countdown/App'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App
  }
})

Vue.filter('two_digits', function(value) {
  if (value.toString().length <= 1) {
    return '0' + value.toString()
  }
  return value.toString()
})
