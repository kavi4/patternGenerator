const actions = {
    changeAttribute(context, payload) {
        context.commit('changeAttribute', payload)
    },

    delete(context, id) {
        context.commit('delete', id)
    },

    create(context, payload) {
        context.commit('create', payload)
    }
}
export default actions
