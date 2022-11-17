<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Window_kontakt from './components/Window_kontakt.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
  <Window_kontakt></Window_kontakt>
</template>

<style scoped>

</style>
