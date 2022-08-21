export default {
    state() {
        return {
            products: [],
            allProducts: [],
            productsCategory: [],
            selectedCategory: 0,
        }
    },
    mutations: {
        saveAllProducts(state, data) {
            state.allProducts = data
        },
        saveProductsCategory(state, data) {
            state.productsCategory = data
        },
        filterByCategory(state) {
            const newProductListByCategory = state.allProducts.filter(
                (product) =>
                product.category.name ===
                state.productsCategory[state.selectedCategory].name
            )
            state.products = newProductListByCategory
        },
        filterBySearching(state, data) {
            const newProductListByCategory = state.allProducts.filter(
                (product) =>
                product.category.name ===
                state.productsCategory[state.selectedCategory].name
            )
            const newProductList = newProductListByCategory.filter((product) =>
                product.name.toLowerCase().includes(data.toLowerCase())
            )
            state.products = newProductList
        },
        saveSelectedCategory(state, data) {
            state.selectedCategory = data
        },
    },
    actions: {
        async getProductCategory({ commit }) {
            /* Hi! I know this URL should be in the .env file,
                      but for the exercise, i put it directly. */
            try {
                await this.$axios
                    .$get('http://sva.talana.com:8000/api/product-category/')
                    .then((res) => {
                        commit('saveProductsCategory', res)
                    })
            } catch (error) {
                console.log(error)
            }
        },

        async getProducts({ commit }) {
            /* Hi! I know this URL should be in the .env file,
                      but for the exercise, i put it directly. */
            try {
                await this.$axios
                    .$get('http://sva.talana.com:8000/api/product/')
                    .then(async(res) => {
                        await commit('saveAllProducts', res)
                        commit('filterByCategory')
                    })
            } catch (error) {
                console.log(error)
            }
        },

        async setSelectedCategory({ commit }, data) {
            await commit('saveSelectedCategory', data)
            commit('filterByCategory')
        },

        setFilterBySearching({ commit }, data) {
            commit('filterBySearching', data)
        },
    },
}
