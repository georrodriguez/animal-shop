<template>
  <v-container fluid>
    <v-snackbar
      color="primary"
      rounded="pill"
      right
      v-model="showSnackbar"
      :timeout="3000"
    >
      {{ getSnackbarData.text }}
    </v-snackbar>

    <v-row justify="center" align="center">
      <v-col v-for="product in getProducts" :key="product.code" cols="4">
        <product-card :product="product"> </product-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" width="800">
      <modal-shopping-cart> </modal-shopping-cart>
    </v-dialog>
  </v-container>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import ModalShoppingCart from '../components/ModalShoppingCart.vue'
export default {
  name: 'IndexPage',
  components: {
    ProductCard,
    ModalShoppingCart,
  },
  computed: {
    getProducts() {
      return this.$store.state.products.products
    },
    getSnackbarData() {
      return this.$store.state.globalModals.indexSnackbar
    },

    dialog: {
      get() {
        return this.$store.state.shoppingCart.modalDialog
      },
      set(val) {
        this.$store.dispatch('shoppingCart/setModalDialog', val)
      },
    },

    showSnackbar: {
      get() {
        return this.$store.state.globalModals.showIndexSnackbar
      },
      set(val) {
        this.$store.dispatch('globalModals/setShowSnackbar', val)
      },
    },
  },
}
</script>
