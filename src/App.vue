<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Window_kontakt from './components/Window_kontakt.vue';
</script>

<template>

  <!-- 1. ROW: HEADER -->

  <header class="row text-bg-dark">
    <nav class="navbar navbar-dark navbar-expand-lg py-3 px-3 px-md-5">
      <!-- brand - mobile variant -->
      <a class="navbar-brand d-md-none px-3 px-md-2" href="/">
        <h1 id="logoTextShort">Účetnictví<br>Matouš Burýšek</h1>
      </a>
      <!-- brand - PC variant -->
      <a class="navbar-brand d-none d-md-block pt-2 px-3 px-md-2" id="navbar-brand" href="/">
        <img class="d-inline-block align-text-top" id="logoImage" src="/src/assets/images/logo.png" height="45">
        <h1 class="d-inline-block align-text-top ms-3" id="logoTextLong">Účetnictví Matouš Burýšek</h1>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-3 ms-md-2 ms-lg-auto mb-2 mb-md-0">
          <RouterLink to="/">
            <li class="nav-item">
              <a class="nav-link">O mně</a>
              <!-- Tady byl původně odkaz na kotvu #matous-burysek -->
            </li>
          </RouterLink>
          <RouterLink to="/">
            <li class="nav-item">
              <a class="nav-link">Služby</a>
              <!-- Tady byl původně odkaz na kotvu #sluzby -->
            </li>
          </RouterLink>
          <RouterLink to="/clanky">
            <li class="nav-item">
              <a class="nav-link">Články</a>
            </li>
          </RouterLink>
          <RouterLink to="/kontakt">
            <li class="nav-item">
              <a class="nav-link">Kontakt</a>
            </li>
          </RouterLink>

        </ul>
      </div>
    </nav>
  </header>

  <!-- MAIN -->
  <RouterView />

  <!-- 7. ROW: FOOTER -->

  <footer class="row bg-dark text-center text-white">
    <div class="container p-4">
      <section class="mb-4">
        <a class="btn btn-outline-light btn-floating m-1"
          href="https://www.linkedin.com/in/matou%C5%A1-bur%C3%BD%C5%A1ek-a46459a0/" role="button" target="_blank">
          <i class="bi bi-linkedin"></i>
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button" target="_blank">
          <i class="bi bi-whatsapp"></i>
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button" target="_blank">
          <i class="bi bi-facebook"></i>
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button" target="_blank">
          <i class="bi bi-google"></i>
        </a>
      </section>

      <section>
        <form action="">
          <div class="row d-flex justify-content-center">
            <div class="col-auto">
              <p class="pt-2">
                <strong>Máte nezávazný zájem o mé služby?</strong>
              </p>
            </div>

            <div class="col-md-5 col-12">
              <div class="form-outline form-white mb-4">
                <input type="email" id="form5Example21" class="form-control" placeholder="Vaše e-mailová adresa" />
              </div>
            </div>

            <div class="col-auto mb-2">
              <button type="submit" class="btn btn-outline-light mb-4">
                Mám zájem o služby
              </button>
            </div>
          </div>
        </form>
      </section>
      <section>
        <div class="row">
          <div class="col-md-4 mb-4 mb-md-0">
            <h5 class="text-uppercase fw-bold">Právní předpisy</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="https://www.zakonyprolidi.cz/cs/1991-563" target=”_blank”>zákon o účetnictví</a>
              </li>
              <li>
                <a href="https://www.zakonyprolidi.cz/cs/1992-586" target=”_blank”>zákon o daních z příjmů</a>
              </li>
              <li>
                <a href="https://www.zakonyprolidi.cz/cs/2004-235" target=”_blank”>zákon o dani z přidané hodnoty</a>
              </li>
              <li>
                <a href="https://www.zakonyprolidi.cz/cs/2009-280" target=”_blank”>daňový řád</a>
              </li>
            </ul>
          </div>

          <div class="col-md-4 mb-4 mb-md-0">
            <h5 class="text-uppercase fw-bold">Kontaktuje mě</h5>

            <i class="bi bi-envelope"></i>&nbsp; <a
              href="mailto:info@ucetnictvi-burysek.cz">info@ucetnictvi-burysek.cz</a><br>
            <i class="bi bi-house"></i>&nbsp; <address class="d-inline"><a href="https://goo.gl/maps/8BHBp8RZEeXn9wsz9"
                target=”_blank”>Cejl 467/65, 602 00 Brno</a></address>
            <br>
            <i class="bi bi-telephone"></i>&nbsp; <a href="tel:+420721880875">+420 721 880 875</a>
          </div>

          <div class="col-md-4 mb-4 mb-md-0">
            <h5 class="text-uppercase fw-bold">Informace o podnikateli</h5>
            Matouš Burýšek<br>
            vedení účetnictví<br>
            IČO: 08498181<br>
          </div>
        </div>
      </section>
    </div>

    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      Vít Křížka © 2022 Copyright
    </div>
  </footer>

  <Window_kontakt></Window_kontakt>

</template>

<style scoped>

</style>
