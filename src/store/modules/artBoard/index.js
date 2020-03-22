import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import validators from './validators'
import GENERATOR from 'Constants/generator'

const artBoard = {
    namespaced: true,
    state: {
        width: 500,
        height: 500,
        generator: GENERATOR.TYPE.BASE,
    },
    mutations,
    actions,
    getters,
    validators,
}

export default artBoard
