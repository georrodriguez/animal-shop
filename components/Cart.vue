<template>
  <div class="text-center">
    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-store-outline</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Shopping Cart</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <!-- Products in cart -->
      <v-container fluid v-if="products.length > 0">
        <div
          v-for="(product, idx) in products"
          :key="idx"
          align="left"
          class="mt-2"
        >
          <h4 class="card-abstract-container">Name: {{ product.name }}</h4>
          <v-row align="center" class="mb-1">
            <v-col cols="2"
              ><v-img height="50px" width="50px" :src="product.photo"></v-img
            ></v-col>
            <v-col cols="2">
              <span>Price: ${{ product.price }}</span>
            </v-col>

            <v-col cols="4">
              <v-btn
                :disabled="product.quantity === 1"
                @click="removeQuantity(product)"
                class="ma-2"
                text
                icon
                color="white"
              >
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              {{ product.quantity }}
              <v-btn
                :disabled="product.quantity === product.stock"
                @click="addQuantity(product)"
                class="ma-2"
                text
                icon
                color="white"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="3">
              <span>Sub-total: ${{ product.price * product.quantity }}</span>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>

        <v-divider></v-divider>
        <div align="right" class="mt-5">
          <h3>Total: ${{ totalPrice }}</h3>
        </div>
      </v-container>
      <!-- Products in cart -->

      <v-list v-else>
        <v-list-item-title>Nothing here yet...</v-list-item-title>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      loading: true,
      search: '',
    }
  },
  computed: {
    products() {
      return this.$store.state.shoppingCart.cart
    },
    totalPrice() {
      return this.$store.state.shoppingCart.totalPrice
    },
  },
  methods: {
    removeQuantity(product) {
      const newData = JSON.parse(JSON.stringify(product))
      newData.quantity = 1
      this.$store.dispatch('shoppingCart/removeItemToCart', newData)
    },
    addQuantity(product) {
      const newData = JSON.parse(JSON.stringify(product))
      newData.quantity = 1
      this.$store.dispatch('shoppingCart/addItemToCart', newData)
    },
  },
}
</script>

<style scoped>
.card-abstract-container {
  display: inline-block;
  white-space: nowrap;
  width: 300px;
  overflow: hidden !important;
  text-overflow: ellipsis;
}
</style>
