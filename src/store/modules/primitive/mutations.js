const mutations = {
    changeAttribute(store, payload) {
        store.primitives[payload.id][payload.attribute] = payload.value
    },

    delete(store, id) {
        let newPrimitives = {...store.primitives}
        delete newPrimitives[id]
        store.primitives = newPrimitives
    },

    create(store, payload) {
        const newItem = {}
        newItem[payload.id] = payload
        store.primitives = {...store.primitives, ...newItem}
    }
}
export default mutations
