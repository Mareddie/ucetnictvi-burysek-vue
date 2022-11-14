<script setup lang="ts">
import Jumbotron from '../components/Jumbotron.vue'
import Sluzby from '../components/Sluzby.vue'
import O_mne from '../components/O_mne.vue'
import Tlacitko from '../components/Tlacitko.vue'

// function openContactBox() {
//   let contactWindow = document.getElementById("window-contact");
//   contactWindow.style.display = "block"
// }

// function closeContactBox() {
//   let contactWindow = document.getElementById("window-contact");
//   contactWindow.style.display = "none";
// }
</script>

<template>
  <main>
    <Jumbotron></Jumbotron>
    <Sluzby></Sluzby>
    <O_mne></O_mne>
    <Tlacitko></Tlacitko>
  </main>

  <!-- WINDOW: CONTACT -->

  <div id="window-contact" class="container p-3 p-md-5">
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

    <div id="close-button" onclick="closeContactBox()" aria-label="Zavřít okno"><i class="bi bi-x-lg"></i></div>
  </div>


</template>
