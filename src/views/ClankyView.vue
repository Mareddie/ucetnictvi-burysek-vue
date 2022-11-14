<script setup lang="ts">
import Tlacitko from '../components/Tlacitko.vue'
import Window_kontakt from '@/components/Window_kontakt.vue';
</script>

<template>
    <main>

        <!-- AKTUÁLNÍ ČLÁNEK -->

        <section id="clanek" class="row py-3 px-3 px-md-5">
            <h1>Název článku</h1>
            <div>
                <img class="d-none d-lg-block" src="https://picsum.photos/id/264//100/150" alt="..."
                    style="width: 20%; float: right; margin-left: 25px; margin-bottom: 10px;">
                <p class="text-muted">29. srpen 2022, Matouš Burýšek</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce tellus odio, dapibus id fermentum
                    quis, suscipit id erat. Nulla quis diam. Aenean id metus id velit ullamcorper pulvinar. Et harum
                    quidem rerum facilis est et expedita distinctio. Cras elementum. Integer tempor. Nulla turpis magna,
                    cursus sit amet, suscipit a, interdum id, felis. Morbi imperdiet, mauris ac auctor dictum, nisl
                    ligula egestas nulla, et sollicitudin sem purus in lacus. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                    Curabitur vitae diam non enim vestibulum interdum. Ut tempus purus at lorem. Integer pellentesque
                    quam vel velit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Aliquam erat
                    volutpat.</p>
                <p>Etiam quis quam. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio,
                    vitae placerat pede sem sit amet enim. Curabitur ligula sapien, pulvinar a vestibulum quis,
                    facilisis vel sapien. Mauris dictum facilisis augue. Nullam rhoncus aliquam metus. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Nulla non arcu lacinia neque faucibus fringilla. Aliquam erat volutpat. Etiam commodo dui eget wisi.
                    Phasellus rhoncus. Mauris metus.</p>
                <h3><span class="text-primary">► </span>Podnadpis</h3>
                <p>Aliquam erat volutpat. Etiam neque. Fusce aliquam vestibulum ipsum. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nunc dapibus tortor
                    vel mi dapibus sollicitudin. Pellentesque arcu. Nam quis nulla. Etiam neque. Pellentesque arcu.
                    Morbi scelerisque luctus velit. Proin in tellus sit amet nibh dignissim sagittis. Integer in sapien.
                    Fusce aliquam vestibulum ipsum. Morbi scelerisque luctus velit. Etiam posuere lacus quis dolor.</p>
                <img class="d-none d-lg-block" src="https://picsum.photos/id/274//100/150" alt="..."
                    style="width: 25%; float: left; margin-right: 25px; margin-bottom: 10px;">
                <p>Quisque porta. Duis pulvinar. Mauris dictum facilisis augue. Etiam quis quam. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tempor. Aenean fermentum
                    risus id tortor. Phasellus faucibus molestie nisl. Etiam dui sem, fermentum vitae, sagittis id,
                    malesuada in, quam. Nullam eget nisl. Donec vitae arcu. Etiam bibendum elit eget erat. Nullam
                    rhoncus aliquam metus. Cras elementum. Vivamus ac leo pretium faucibus. Cras pede libero, dapibus
                    nec, pretium sit amet, tempor quis. Nullam lectus justo, vulputate eget mollis sed, tempor sed
                    magna.</p>
                <h3><span class="text-primary">► </span>Podnadpis</h3>
                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer
                    malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt. Nunc tincidunt ante vitae massa. Fusce
                    suscipit libero eget elit. Aliquam erat volutpat. Etiam bibendum elit eget erat. Pellentesque arcu.
                    Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio
                    a lectus. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Praesent id justo in
                    neque elementum ultrices. Quisque porta.</p>
                <p>Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Sed ut perspiciatis unde
                    omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nulla
                    pulvinar eleifend sem. Mauris tincidunt sem sed arcu. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                    Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat
                    pede sem sit amet enim. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.
                    Nulla non lectus sed nisl molestie malesuada. Duis bibendum, lectus ut viverra rhoncus, dolor nunc
                    faucibus libero, eget facilisis enim ipsum id lacus. Nulla pulvinar eleifend sem. Itaque earum rerum
                    hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus asperiores repellat. Morbi imperdiet, mauris ac auctor dictum, nisl ligula
                    egestas nulla, et sollicitudin sem purus in lacus.</p>
            </div>
        </section>

        <Tlacitko></Tlacitko>

        <!-- DALŠÍ ČLÁNKY -->

        <section id="dalsi-clanky" class="row bg-primary p-3 p-md-5">

            <div class="mb-4">
                <h2 class="text-white text-center">Další články</h2>
            </div>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-2">
                <div class="col">
                    <div class="card">
                        <img src="https://picsum.photos/id/306//200/100" class="card-img-top" alt="...">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title fw-bold">Zdanění prodeje vozidla mezi členskými státy EU</h5>
                            <p class="card-text">V tomto článku se dozvíte, jak správně zaúčtovat a zdanit koupi a
                                prodej motorového vozidla mezi členskými státy EU.</p>
                            <p class="card-text"><small class="text-muted">Poslední aktualizace: 29. 8. 2022</small></p>
                            <div class="text-center mt-auto mb-2">
                                <a href="#" class="btn btn-primary">Přečíst článek</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="https://picsum.photos/id/305//200/100" class="card-img-top" alt="...">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title fw-bold">Základy zdanění kryptoměn</h5>
                            <p class="card-text">V tomto článku se dozvíte, jak správně zaúčtovat a zdanit koupi a
                                prodej motorového vozidla mezi členskými státy EU.</p>
                            <p class="card-text"><small class="text-muted">Poslední aktualizace: 29. 8. 2022</small></p>
                            <div class="text-center mt-auto mb-2">
                                <a href="#" class="btn btn-primary">Přečíst článek</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="https://picsum.photos/id/304//200/100" class="card-img-top" alt="...">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title fw-bold">Zdanění v ČR</h5>
                            <p class="card-text">V tomto článku se dozvíte, jak správně zaúčtovat a zdanit koupi a
                                prodej motorového vozidla mezi členskými státy EU.</p>
                            <p class="card-text"><small class="text-muted">Poslední aktualizace: 29. 8. 2022</small></p>
                            <div class="text-center mt-auto mb-2">
                                <a href="#" class="btn btn-primary">Přečíst článek</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="https://picsum.photos/id/299/200/100" class="card-img-top" alt="...">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title fw-bold">Principy účetnictví</h5>
                            <p class="card-text">V tomto článku se dozvíte, jak správně zaúčtovat a zdanit koupi a
                                prodej motorového vozidla mezi členskými státy EU.</p>
                            <p class="card-text"><small class="text-muted">Poslední aktualizace: 29. 8. 2022</small></p>
                            <div class="text-center mt-auto mb-2">
                                <a href="#" class="btn btn-primary">Přečíst článek</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- <Window_kontakt></Window_kontakt> -->
</template>

<style>

</style>
