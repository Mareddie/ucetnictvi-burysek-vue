<script setup lang="ts">
import Jumbotron from '../components/sections/Jumbotron.vue'
import Services from '../components/sections/Services.vue'
import AboutMe from '../components/sections/AboutMe.vue'
import Button from '../components/sections/Button.vue'
import Software from '../components/sections/Software.vue'
import ContactPopUp from '../components/popup/ContactPopUp.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      isContactPopupOpen: false
    }
  },
}
</script>

<template>
  <main>
    <Jumbotron @openContactBoxEvent="isContactPopupOpen = true"></Jumbotron>
    <Services></Services>
    <AboutMe></AboutMe>
    <Button @openContactBoxEvent="isContactPopupOpen = true"></Button>
    <Software></Software>
    <ContactPopUp :isOpen="isContactPopupOpen" @closeContactBoxEvent="isContactPopupOpen = false"></ContactPopUp>
  </main>
</template>
