export default {
    state() {
        return {
            productSelected: {},
            modalDialog: false,
            cart: [],
            totalPrice: 0,
        }
    },
    mutations: {
        saveProductSelected(state, data) {
            state.productSelected = data
        },
        saveModalDialog(state, data) {
            state.modalDialog = data
        },
        addToCart(state, item) {
            state.cart.push(item)
        },
        setTotalPrice(state) {
            state.cart.forEach((element) => {
                state.totalPrice = state.totalPrice + element.price * element.quantity
            })
        },
    },
    actions: {
        setProductSelected({ commit }, data) {
            commit('saveProductSelected', data)
        },
        setModalDialog({ commit }, data) {
            commit('saveModalDialog', data)
        },
        addItemToCart({ commit }, item) {
            commit('addToCart', item)
            commit('setTotalPrice')
        },
    },
}
