<template>
  <v-app>
    <v-main>
      <home-view></home-view>
      <chisiamo-view></chisiamo-view>
      <contatti-view></contatti-view>
    </v-main>
  </v-app>
</template>

<script>
import HomeView from './components/HomeView.vue'
import ChisiamoView from './components/ChisiamoView.vue'
import ContattiView from './components/ContattiView.vue'
export default {
  components: {
    HomeView,
    ChisiamoView,
    ContattiView,
  }
};
</script>
