export default {
    state() {
        return {
            indexSnackbar: {},
            showIndexSnackbar: false,
            showNotificationNavbar: false,
        }
    },
    mutations: {
        saveIndexSnackbar(state, data) {
            state.indexSnackbar = data
        },
        showSnackbar(state, data) {
            state.showIndexSnackbar = data
        },
        showNotificationNavbar(state, data) {
            state.showNotificationNavbar = data
        },
    },
    actions: {
        setSnackbarData({ commit }, data) {
            commit('saveIndexSnackbar', data)
        },
        setShowSnackbar({ commit }, data) {
            commit('showSnackbar', data)
        },
        setShowNotificationNavbar({ commit }, data) {
            commit('showNotificationNavbar', data)
        },
    },
}
