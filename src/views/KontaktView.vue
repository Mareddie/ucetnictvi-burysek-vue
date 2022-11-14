<template>
  <main>

    <!-- 2. ROW: KONTAKTNÍ ÚDAJE -->

    <section id="kontakt" class="row p-3 p-md-5">
      <div class="col-lg-auto">
        <img class="d-none d-lg-block" src="/src/assets/photos/nahodny-typek.png" alt="Matouš Burýšek - fotografie"
          width="300">
      </div>

      <div class="col-lg">
        <div class="d-md-block">
          <h2 class="mb-1"><span class="word-background">Matouš Burýšek</span></h2>
          <h5 class="mb-4"><em>účetní, mzdový účetní</em></h5>
        </div>

        <p>V současné době podnikám v oblasti účetních poradců, vedení účetnictví, vedení daňové evidence a zpracování
          mezd. Při práci využívám účetní software POHODA a pro personalistiku a mzdy software PAMICA. Předem děkuji za
          důvěru, jestliže máte zájem o mé služby. Neváhejte mě kontaktovat.</p>
        <h4 class="mt-4 mb-1"><i class="bi bi-envelope text-primary"></i>&nbsp; <a
            href="mailto: info@ucetnictvi-burysek.cz">info@ucetnictvi-burysek.cz</a></h4>
        <h4 class="mt-4 mb-1"><i class="bi bi-telephone text-primary"></i>&nbsp; <a href="tel:+420721880875">+420 721
            880 875</a></h4>
        <h4 class="mt-4 mb-1"><span class="text-primary">► </span> Další údaje</h4>
        <table class="table">
          <tr>
            <td class="fw-bold">IČO:</td>
            <td>08498181</td>
          </tr>
          <tr>
            <td class="fw-bold">Sídlo:</td>
            <td><a href="https://goo.gl/maps/8BHBp8RZEeXn9wsz9" target=”_blank”>Soudní 467/1, 602 00 Brno</a></td>
          </tr>
          <tr>
            <td class="fw-bold">Korespondenční adresa:</td>
            <td><a href="https://goo.gl/maps/8BHBp8RZEeXn9wsz9" target=”_blank”>Cejl 467/65, 602 00 Brno</a></td>
          </tr>
          <tr>
            <td class="fw-bold">Bankovní spojení:</td>
            <td>1913438028/3030 (Air Bank, a.s.)</td>
          </tr>
          <tr>
            <td class="fw-bold">ID datové schránky:</td>
            <td>zyycx42</td>
          </tr>
        </table>
      </div>
    </section>

    <!-- 3. ROW: KONTAKTNÍ FORMULÁŘ -->

    <section id="kontaktni-formular" class="row text-bg-primary p-3 p-md-5">
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
      <!-- https://www.youtube.com/watch?v=0X0kovjzLrw -->
    </section>

  </main>
</template>

<style>

</style>
