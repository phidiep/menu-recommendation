<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- <HelloWorld/> -->
      <v-container>
        <InputForm/>
        <section class="products">
          <Product
            v-for="product in products"
            :key="product.color"
            :product="product"
          />
        </section>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import InputForm from "./components/InputForm";
import Product from "./components/Product.vue";
export default {
  name: "App",

  components: {
    // HelloWorld,
    InputForm,
    Product,
  },

  data: () => ({
    products: [
      {
        title: "Pho",
        color: "green",
        bgtext: "FOOD",
        src: require("./assets/pho.jpg"),
      },
      {
        title: "Pho",
        color: "blue",
        bgtext: "FOOD",
        src: require("./assets/pho.jpg"),
      },
    ],
  }),
};
</script>

<style>
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body {
  font-family: 'montseratt', sans-serif;
}

v-container {
  width: 100vh;
  min-height: 100vh;
  overflow: hidden;

  background-color: #EEE;
  display: flex;
  justify-content: center;
  align-items: center;
}

.products {
  display: flex;
  max-width: 1280px;
  padding: 25px;
  margin: 0 auto;
}
</style>
