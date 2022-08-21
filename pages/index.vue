<template>
  <v-container fluid>
    <!-- Announ -->
    <div v-if="getProducts.length === 0">
      <v-row>
        <v-banner class="mx-5" outlined width="100%">
          <v-avatar slot="icon" color="accent" size="40">
            <v-icon icon="mdi-lock" color="white"> mdi-alert </v-icon>
          </v-avatar>

          <b>Nothing here yet...</b>
        </v-banner>
      </v-row>
    </div>
    <!-- Announ -->

    <!-- Modal Snackbar -->
    <v-snackbar
      color="primary"
      rounded="pill"
      right
      v-model="showSnackbar"
      :timeout="3000"
    >
      {{ getSnackbarData.text }}
    </v-snackbar>
    <!-- Modal Snackbar -->

    <!-- All products -->
    <v-row justify="center" align="center">
      <v-col v-for="product in getProducts" :key="product.code" cols="4">
        <product-card :product="product"> </product-card>
      </v-col>
    </v-row>
    <!-- All products -->

    <!-- Product Dialog -->
    <v-dialog v-model="dialog" width="800">
      <modal-shopping-cart> </modal-shopping-cart>
    </v-dialog>
    <!-- Product Dialog -->
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
