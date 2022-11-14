<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
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
            <img class="col-auto" src="/src/assets/icons/ucetnictvi.png" width="64" height="64">
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
            <img class="col-auto" src="/src/assets/icons/mzdove-ucetnictvi.png" alt="ikona - mzdové účetnictví"
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
            <img class="col-auto" src="/src/assets/icons/danova-evidence.png" alt="ikona - daňová evidence" width="64"
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
            <img class="col-auto" src="/src/assets/icons/danove-priznani.png" alt="ikona - daňové přiznání" width="64"
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

      <img class="d-md-none d-md px-5" src="/src/assets/photos/nahodny-typek.png" alt="Matouš Burýšek - fotografie"
        width="200">

      <div class="col-md-auto">
        <img class="d-none d-md-block" src="/src/assets/photos/nahodny-typek.png" alt="Matouš Burýšek - fotografie"
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
        <img class="d-md-none px-5" src="/src/assets/images/POHODA-box.png" alt="logo POHODA - účetní software"
          width="200">
        <div class="d-none d-md-block col-md-auto mx-auto">
          <img src="/src/assets/images/POHODA-box.png" alt="logo POHODA - účetní software" width="200">
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
        <img class="d-md-none px-5" src="/src/assets/images/PAMICA-box.png"
          alt="logo PAMICA - software pro mzdové účetnictví" width="200">
        <div class="d-none d-md-block col-md-auto mx-auto">
          <img src="/src/assets/images/PAMICA-box.png" alt="logo PAMICA - software pro mzdové účetnictví" width="200">
        </div>
        <div class="col-md">
          <div class="d-none d-md-block">
            <h3><span class="text-primary">► </span>Personalistika a mzdy v <span class="word-background">PAMICE</span>
            </h3>
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
</template>
