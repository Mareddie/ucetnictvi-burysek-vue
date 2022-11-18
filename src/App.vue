<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ContactPopUp from './components/popup/ContactPopUp.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
  <ContactPopUp></ContactPopUp>
</template>

<style scoped>

</style>
