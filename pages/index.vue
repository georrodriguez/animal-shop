<template>
  <v-container fluid>
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
    dialog: {
      get() {
        return this.$store.state.shoppingCart.modalDialog
      },
      set(val) {
        this.$store.dispatch('shoppingCart/setModalDialog', val)
      },
    },
  },
  mounted() {
    /* this.getProducts */
  },
}
</script>
