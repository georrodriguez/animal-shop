/* eslint-disable no-new */
import Vuex from 'vuex'
import products from './products'
import shoppingCart from './shoppingCart'
import globalModals from './globalModals'
new Vuex.Store({
    modules: {
        products,
        shoppingCart,
        globalModals,
    },
})
