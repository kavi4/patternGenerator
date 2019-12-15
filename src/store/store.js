import Vue from 'vue'
import Vuex from 'vuex'
import artBoard from './modules/artBoard'
import primitive from './modules/primitive'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    modules: {
        artBoard,
        primitive
    },
})
