/* eslint-disable no-new */
import Vuex from 'vuex'
import products from './products'
import shoppingCart from './shoppingCart'
new Vuex.Store({
    modules: {
        products,
        shoppingCart,
    },
})