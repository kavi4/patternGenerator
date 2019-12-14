const actions = {
    setWidth(context, width) {
        context.commit('setWidth', width)
    },
    setHeight(context, height) {
        context.commit('setHeight', height)
    }
}
export default actions
