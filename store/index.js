/* eslint-disable no-new */
import Vuex from 'vuex'
import getProducts from './getProducts'
new Vuex.Store({
    modules: {
        getProducts,
    },
})