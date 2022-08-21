<template>
  <v-app dark>
    <v-overlay :value="loading">
      <v-progress-circular
        indeterminate
        color="white"
        size="64"
      ></v-progress-circular>
    </v-overlay>

    <!-- navbar -->
    <v-app-bar color="primary" fixed app>
      <v-spacer />
      <v-text-field
        v-model="search"
        class="margin-container"
        solo
        label="Search Product in category..."
        append-icon="mdi-magnify"
      ></v-text-field>
      <v-btn class="ma-2" text icon color="white">
        <v-icon>mdi-store-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- navbar -->

    <!-- sidebar -->
    <v-navigation-drawer color="transparent" fixed permanent app>
      <v-card height="100vh" class="nav-container">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Talana </v-list-item-title>
            <v-list-item-subtitle> Products </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item-group v-model="selectedCategory" color="primary">
          <v-list-item
            v-for="(category, i) in getProductsCategoryList"
            :key="i"
          >
            <v-list-item-content>
              <v-list-item-title v-text="category.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-card>
    </v-navigation-drawer>
    <!-- sidebar -->

    <!-- APP -->
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- APP -->
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      loading: true,
      search: '',
    }
  },
  async mounted() {
    this.loading = true
    this.getProductCategory()
    this.getProducts()
    this.loading = false
  },
  computed: {
    getProductsCategoryList() {
      return this.$store.state.products.productsCategory
    },
    selectedCategory: {
      get() {
        return this.$store.state.products.selectedCategory
      },
      set(val) {
        this.$store.dispatch('products/setSelectedCategory', val)
      },
    },
  },
  watch: {
    search(val) {
      this.$store.dispatch('products/setFilterBySearching', val)
    },
  },
  methods: {
    async getProductCategory() {
      await this.$store.dispatch('products/getProductCategory')
    },
    async getProducts() {
      await this.$store.dispatch('products/getProducts')
    },
  },
}
</script>

<style scoped>
.margin-container {
  margin-top: 2rem;
}

.nav-container {
  border-right: 1px solid #3c4043;
  background-color: transparent;
}
</style>
