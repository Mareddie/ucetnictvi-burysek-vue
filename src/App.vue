<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <body class="container">

    <!-- 1. ROW: HEADER -->

    <header class="row text-bg-dark">
      <nav class="navbar navbar-dark navbar-expand-lg py-3 px-3 px-md-5">
        <!-- brand - mobile variant -->
        <a class="navbar-brand d-md-none px-3 px-md-2" href="/index.html">
          <h1 id="logoTextShort">Účetnictví<br>Matouš Burýšek</h1>
        </a>
        <!-- brand - PC variant -->
        <a class="navbar-brand d-none d-md-block pt-2 px-3 px-md-2" id="navbar-brand" href="/index.html">
          <img class="d-inline-block align-text-top" id="logoImage" src="/assets/images/logo.png" height="45">
          <h1 class="d-inline-block align-text-top ms-3" id="logoTextLong">Účetnictví Matouš Burýšek</h1>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-3 ms-md-2 ms-lg-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link" href="#matous-burysek">O mně</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#sluzby">Služby</a>
            </li>
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

    <main>

      <!-- 2. ROW: JUMBOTRON -->

      <section id="vedeni-ucetnictvi" class="row jumbotron">
        <div class="p-3 p-md-5 rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold jumbotron-text">Vedení účetnictví</h1>
            <p class="col-md-8 fs-4 jumbotron-text">daňová evidence, podvojné účetnictví, mzdové účetnictví</p>
            <button class="btn btn-primary btn-lg" type="button" onclick="openContactBox()">Nezávazně poptat účetní
              služby</button>
          </div>
        </div>
      </section>

      <!-- 3: ROW: SLUŽBY -->

      <section id="sluzby" class="row bg-light">
        <div class="row px-3 px-md-5 pt-3 pt-md-5 pb-3 pb-md-3">
          <div class="col-md">
            <article id="sluzby-ucetnictvi" class="row">
              <img class="col-auto" src="./assets/icons/ucetnictvi.png" width="64" height="64">
              <div class="col">
                <h3>Účetnictví</h3>
                <h5 class="text-secondary">vedení podvojného účetnictví</h5>
                <p>Zpracování podvojného účetnictví pro právnické osoby nebo fyzické osoby vedoucí účetnictví povinně či
                  dobrovolně. Zastupování na příslušných úřadech. Zpracování výkazů pro klienty.</p>
              </div>
            </article>
          </div>
          <div class="col-md">
            <article id="sluzby-mzdove-ucetnictvi" class="row">
              <img class="col-auto" src="./assets/icons/mzdove-ucetnictvi.png" alt="ikona - mzdové účetnictví"
                width="64" height="64">
              <div class="col">
                <h3>Mzdové účetnictví</h3>
                <h5 class="text-secondary">zpracování mezd od A do Z</h5>
                <p>Komplexní zpracování mzdové agendy včetně zastupování na příslušných úřadech. Evidence exekucí a
                  insolvence. Poskytování součinnosti pro exekutory a insolvenční správce.</p>
              </div>
            </article>
          </div>
        </div>
        <div class="row px-3 px-md-5 pb-3 pb-md-4">
          <div class="col-md">
            <article id="sluzby-danova-evidence" class="row">
              <img class="col-auto" src="./assets/icons/danova-evidence.png" alt="ikona - daňová evidence" width="64"
                height="64">
              <div class="col">
                <h3>Daňová evidence</h3>
                <h5 class="text-secondary">vedení peněžního deníku</h5>
                <p>Zpracování daňové evidence pro fyzické osoby vedoucí peněžní deník nebo paušální výdaje.</p>
              </div>
            </article>
          </div>
          <div class="col-md">
            <article id="sluzby-danove-priznani" class="row">
              <img class="col-auto" src="./assets/icons/danove-priznani.png" alt="ikona - daňové přiznání" width="64"
                height="64">
              <div class="col">
                <h3>Daňové přiznání</h3>
                <h5 class="text-secondary">zpracování daňového přiznání</h5>
                <p>Zpracování daňového přiznání k dani z příjmu právnických a fyzických osob, k silniční dani i k dani z
                  nemovitých věcí.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 4. ROW: O MNĚ -->

      <section id="matous-burysek" class="row p-3 p-md-5">
        <div class="d-md-none text-center">
          <h2 class="mb-1">Matouš Burýšek</h2>
          <h5 class="mb-1"><em>účetní, mzdový účetní</em></h5>
        </div>

        <img class="d-md-none d-md px-5" src="./assets/photos/nahodny-typek.png" alt="Matouš Burýšek - fotografie"
          width="200">

        <div class="col-md-auto">
          <img class="d-none d-md-block" src="./assets/photos/nahodny-typek.png" alt="Matouš Burýšek - fotografie"
            width="300">
        </div>

        <div class="col-md">
          <div class="d-none d-md-block">
            <h2 class="mb-1"><span class="word-background">Matouš Burýšek</span></h2>
            <h5 class="mb-4"><em>účetní, mzdový účetní</em></h5>
          </div>

          <p>V současné době podnikám v oblasti účetních poradců, vedení účetnictví, vedení daňové evidence a zpracování
            mezd. Při práci využívám účetní software POHODA a pro personalistiku a mzdy software PAMICA.</p>

          <h4 class="mt-4 mb-1"><span class="text-primary">► </span>Pracovní zkušenosti</h4>
          <p>V roce 2018 jsem začínal na pozici junior účetní ve středně velké společnosti, kde jsem zpracovával vydané
            a přijaté faktury (tuzemské i zahraniční), evidoval majetek a spravoval skladové karty. V oce 2019 jsem
            přestoupil do účetní společnosti, která poskytovala ekonomické služby pro holding Vendeavour Service, na
            pozici samostatného účetního.</p>

          <h4 class="mt-4 mb-1"><span class="text-primary">► </span>Vzdělávání</h4>
          <p>V poslední době jsem absolvoval kurzy Roční zúčtování mezd, Zdaňování příjmů ze závislé činnosti a
            Legislativní aktuality v vzdělávací agentuře INTEGRA CENTRUM, s.r.o. Jsem držitelem příslušných certifikátů.
          </p>

          <h4 class="mt-4 mb-1"><span class="text-primary">► </span>Přístup k účetnictví</h4>
          <p>Účetnictví je nástroj pro sledování a zobrazení stavů, toků a výsledků ekonomické činnosti. Snažím se, aby
            bylo vedeno správně, úplně, průkazně, srozumitelně a přehledně, a to zejména s ohledem na požadavky klienta.
          </p>
        </div>
      </section>

      <!-- 5. ROW TLAČÍTKO -->

      <section id="poptavka" class="row bg-light py-5">
        <div class="d-grid gap-2 col-8 col-md-5 mx-auto">
          <button class="btn btn-primary btn-lg text-uppercase fw-bold" onclick="openContactBox()">
            <h3 class="pt-2">Nezávazně poptat účetní služby</h3>
          </button>
        </div>
      </section>

      <!-- 6. ROW SOFTWARE -->

      <section id="ucetni-software" class="row p-3 p-md-5">
        <article id="software-pohoda" class="row">
          <div class="d-md-none text-center">
            <h3>Účtuji v POHODĚ</h3>
          </div>
          <img class="d-md-none px-5" src="./assets/images/POHODA-box.png" alt="logo POHODA - účetní software"
            width="200">
          <div class="d-none d-md-block col-md-auto mx-auto">
            <img src="./assets/images/POHODA-box.png" alt="logo POHODA - účetní software" width="200">
          </div>
          <div class="col-md">
            <div class="d-none d-md-block">
              <h3><span class="text-primary">► </span>Účtuji v <span class="word-background">POHODĚ</span></h3>
            </div>
            <p>POHODA umožňuje vést účetnictví i daňovou evidenci a vyhoví plátcům i neplátcům DPH. Systém je oborově
              neutrální a je vhodný nejen pro živnostníky, podnikatele a společnosti, které se zabývají obchodem a
              poskytováním služeb, ale i pro svobodná povolání a účtující příspěvkové a neziskové organizace.</p>
          </div>
        </article>
        <article id="software-pamica" class="row">
          <div class="d-md-none text-center">
            <h3><span class="text-primary">► </span>Mzdy v <span class="word-background">PAMICE</span></h3>
          </div>
          <img class="d-md-none px-5" src="./assets/images/PAMICA-box.png"
            alt="logo PAMICA - software pro mzdové účetnictví" width="200">
          <div class="d-none d-md-block col-md-auto mx-auto">
            <img src="./assets/images/PAMICA-box.png" alt="logo PAMICA - software pro mzdové účetnictví" width="200">
          </div>
          <div class="col-md">
            <div class="d-none d-md-block">
              <h3><span class="text-primary">► </span>Personalistika a mzdy v <span
                  class="word-background">PAMICE</span></h3>
            </div>
            <p>PAMICA je profesionální nástroj na vedení agend personalistiky, pracovních poměrů a zpracování mezd
              zaměstnanců. Tento software ocení firmy jak s vlastní personální kanceláří, nebo s větším počtem klientů,
              stejně tak účetní firmy vyžadující profesionální správu dat zaměstnanců a jejich mezd. Práce je možná
              samostatně ale s případnými exporty závazků a pohledávek do účetního programu POHODA. Aplikace podporuje
              případné xml importy z docházkových systémů.</p>
          </div>
        </article>
      </section>

    </main>

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
              <i class="bi bi-house"></i>&nbsp; <address class="d-inline"><a
                  href="https://goo.gl/maps/8BHBp8RZEeXn9wsz9" target=”_blank”>Cejl 467/65, 602 00 Brno</a></address>
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
  </body>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/test">Test</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
