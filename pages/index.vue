<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col v-for="product in getProducts" :key="product.code" cols="4">
        <product-card :product="product"> </product-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
export default {
  name: 'IndexPage',
  components: {
    ProductCard,
  },
  computed: {
    getProducts() {
      return this.$store.state.getProducts.products
    },
  },
  mounted() {
    /* this.getProducts */
  },
}
</script>
