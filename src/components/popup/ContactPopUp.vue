<script lang="ts">
export default {
    methods: {
        closeContactBox() {
            this.$emit("closeContactBoxEvent");
        }
    },
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
    <div id="window-contact" class="container p-3 p-md-5" v-if="isOpen">
        <h2 class="text-center">Máte zájem o mé služby?</h2>
        <p class="text-center">Vyplňte své kontaktní údaje a v nejbližší době se Vám ozvu. Zjistíme, jestli bychom spolu
            mohli spolupracovat.</p>

        <form action="https://formsubmit.co/el/jupuso" method="POST">
            <div class="mb-3">
                <label for="name" class="form-label">Jméno a příjmení:</label>
                <input type="text" class="form-control" id="name" name="name">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">E-mailová adresa</label>
                <input type="email" class="form-control" id="email" name="mail">
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Telefonní číslo:</label>
                <input type="tel" class="form-control" id="phone" name="phone">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="check">
                <label class="form-check-label" for="check">Beru na vědomí Zásady ochrany osobních údajů.</label>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-dark btn-lg text-uppercase">Odeslat</button>
            </div>
        </form>

        <div id="close-button" @click="closeContactBox" aria-label="Zavřít okno"><i class="bi bi-x-lg"></i></div>
    </div>
</template>

<style scoped>
#window-contact {
    /* display: none; */
    position: fixed;
    top: 15%;
    left: 20%;
    width: 60%;
    background-color: hsl(220, 90%, 56%);
    border-radius: 15px;
    box-shadow: 0 0 10px black;
    color: white;
}

#close-button {
    position: absolute;
    top: 5px;
    right: 15px;
    font-size: xx-large;
    color: black;
    /* font-weight: bold; */
    cursor: pointer;
}

#close-button:hover {
    color: white;
    font-weight: bold;
}
</style>