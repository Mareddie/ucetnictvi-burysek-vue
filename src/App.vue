<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>
