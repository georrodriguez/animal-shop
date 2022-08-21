<template>
  <v-card height="100%">
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="3"
          ><v-img height="100%" :src="getProduct.photo"></v-img
        ></v-col>
        <v-col cols="8">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-card-title>{{ getProduct.name }}</v-card-title>

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

              <div class="grey--text ms-4">
                In Stock: {{ getProduct.stock }}
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              <span>
                {{ getProduct.abstract }}
              </span>
            </div>

            <div>
              <span>{{ getProduct.description }}</span>
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title
            >${{ getProduct.price * getProduct.quantity }}</v-card-title
          >

          <v-card-actions>
            <v-card>
              <v-card-text
                ><v-btn
                  :disabled="getProduct.quantity === 1"
                  @click="getProduct.quantity--"
                  class="ma-2"
                  text
                  icon
                  color="white"
                >
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                {{ getProduct.quantity }}
                <v-btn
                  :disabled="getProduct.quantity === getProduct.stock"
                  @click="getProduct.quantity++"
                  class="ma-2"
                  text
                  icon
                  color="white"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
            <v-spacer />
            <v-btn color="primary lighten-2" text> Add to Cart </v-btn>
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
    getProduct() {
      return this.$store.state.shoppingCart.productSelected
    },
  },
}
</script>
<style scoped></style>
