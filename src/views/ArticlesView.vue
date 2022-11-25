<script setup lang="ts">
import Button from '../components/sections/Button.vue'
import Article from '../components/elements/Article.vue'
import Articles from '../components/sections/Articles.vue'
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
        <Article id="1" name="Název článku" image="https://picsum.photos/id/264//100/150" date="29. srpen 2022"
            annotation="" text=""></Article>
        <Button @openContactBoxEvent="isContactPopupOpen = true"></Button>
        <Articles></Articles>
        <ContactPopUp :isOpen="isContactPopupOpen" @closeContactBoxEvent="isContactPopupOpen = false"></ContactPopUp>
    </main>
</template>
