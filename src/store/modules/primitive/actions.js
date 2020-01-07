import Uuid from 'uuid/v4'

const actions = {
    changeAttribute(context, payload) {
        context.commit('changeAttribute', payload)
    },

    delete(context, id) {
        context.commit('delete', id)
    },

    create(context) {
        context.commit('create', {
            id: Uuid(),
            file: null,
            sizeMin: 1,
            sizeMax: 1,
            densityMin: 1,
            densityMax: 1,
            rotationMax: 0,
            rotationMin: 0,
        })
    }
}
export default actions
