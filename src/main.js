import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import VueI18n from 'vue-i18n'
import Notifications from 'vue-notification'
import en from 'Lang/en'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(Notifications)

const i18n = new VueI18n({
    locale: 'en',
    messages: {en},
    fallbackLocale: 'en',
})

new Vue({
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
