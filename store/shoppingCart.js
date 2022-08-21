export default {
    state() {
        return {
            productSelected: {},
            modalDialog: false,
        }
    },
    mutations: {
        saveProductSelected(state, data) {
            state.productSelected = data
        },
        saveModalDialog(state, data) {
            state.modalDialog = data
        },
    },
    actions: {
        setProductSelected({ commit }, data) {
            commit('saveProductSelected', data)
        },
        setModalDialog({ commit }, data) {
            commit('saveModalDialog', data)
        },
    },
}