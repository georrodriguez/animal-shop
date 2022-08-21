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
        addQuantity(state, data) {
            const totalQuantity = state.cart[data.position].quantity + data.quantity
            if (totalQuantity <= state.cart[data.position].stock) {
                state.cart[data.position].quantity = totalQuantity
            }
        },
        removeQuantity(state, data) {
            const totalQuantity = state.cart[data.position].quantity - data.quantity
            state.cart[data.position].quantity = totalQuantity
        },
        setTotalPrice(state) {
            state.totalPrice = 0
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
        addItemToCart({ commit, state }, item) {
            /* verify if object exist or not to add or remove
                                  quantity to the same object */
            if (state.cart.some((product) => product.id === item.id)) {
                const position = state.cart.findIndex(
                    (product) => product.id === item.id
                )
                commit('addQuantity', { quantity: item.quantity, position })
            } else {
                commit('addToCart', JSON.parse(JSON.stringify(item)))
            }
            commit('setTotalPrice')
        },
        removeItemToCart({ commit, state }, item) {
            const position = state.cart.findIndex((product) => product.id === item.id)
            commit('removeQuantity', { quantity: item.quantity, position })
            commit('setTotalPrice')
        },
    },
}
