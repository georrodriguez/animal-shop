<template>
  <v-card :loading="loading" class="mx-auto my-12" height="630" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="product.photo"></v-img>

    <v-card-title class="card-abstract-container">{{
      product.name
    }}</v-card-title>

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
        <span class="card-abstract-container">
          {{ product.abstract }}
        </span>
      </div>

      <div>
        <span class="card-description-container">{{
          product.description
        }}</span>
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>${{ product.price * quantity }}</v-card-title>

    <v-card-actions v-if="product.stock > 0">
      <v-card>
        <v-card-text
          ><v-btn
            :disabled="quantity === 1"
            @click="quantity--"
            class="ma-2"
            text
            icon
            color="white"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          {{ quantity }}
          <v-btn
            :disabled="quantity === product.stock"
            @click="quantity++"
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
      <v-btn color="deep-purple lighten-2" text> Add to Cart </v-btn>
    </v-card-actions>

    <v-card-actions v-else
      ><v-spacer /><v-card-title class="red--text"> Out of Stock</v-card-title>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    quantity: 1,
  }),

  props: {
    product: {
      type: Object,
    },
  },

  methods: {},
}
</script>
<style scoped>
.card-description-container {
  display: block;
  display: -webkit-box;
  max-width: 100%;
  height: 60px;
  margin: 0 auto;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-abstract-container {
  display: inline-block;
  white-space: nowrap;
  width: 240px;
  overflow: hidden !important;
  text-overflow: ellipsis;
}
</style>
