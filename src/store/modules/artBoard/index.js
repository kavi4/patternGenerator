import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import validators from './validators'

const artBoard = {
    namespaced: true,
    state: {
        width: 500,
        height: 500,
    },
    mutations,
    actions,
    getters,
    validators,
}

export default artBoard
