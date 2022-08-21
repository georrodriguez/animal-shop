<template>
  <v-card height="100%">
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="3"
          ><v-img height="100%" :src="product.photo"></v-img
        ></v-col>
        <v-col cols="8">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-card-title>{{ product.name }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">In Stock: {{ product.stock }}</div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              <span>
                {{ product.abstract }}
              </span>
            </div>

            <div>
              <span>{{ product.description }}</span>
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>${{ product.price * product.quantity }}</v-card-title>

          <v-card-actions>
            Total quantity: {{ product.quantity }}

            <v-spacer />
            <v-btn @click="addItemToCart" color="primary lighten-2" text>
              Add to Cart
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selection: 1,
  }),

  computed: {
    product: {
      get() {
        return this.$store.state.shoppingCart.productSelected
      },
      set(val) {
        this.$store.dispatch('shoppingCart/setProductSelected', val)
      },
    },
  },

  methods: {
    addItemToCart() {
      this.$store.dispatch('shoppingCart/addItemToCart', this.product)
      this.$store.dispatch('shoppingCart/setModalDialog', false)
      this.$store.dispatch('globalModals/setShowNotificationNavbar', true)
      this.$store.dispatch('globalModals/setSnackbarData', {
        text: 'Product Added!',
      })
      this.$store.dispatch('globalModals/setShowSnackbar', true)
    },
  },
}
</script>
<style scoped></style>
