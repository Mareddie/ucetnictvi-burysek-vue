<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/layout/Footer.vue'
import Header from './components/layout/Header.vue'
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>
