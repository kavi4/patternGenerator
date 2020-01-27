import Vue from 'vue'
import Vuex from 'vuex'
import artBoard from './modules/artBoard'
import primitive from './modules/primitive'
import ValidationPlugin from 'Store/plugins/validation'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    plugins: [
        ValidationPlugin()
    ]
})

store.registerModule('artBoard', artBoard)
store.registerModule('primitive', primitive)

export default store
