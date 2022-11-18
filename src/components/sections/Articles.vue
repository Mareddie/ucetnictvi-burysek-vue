<script setup lang="ts">
import ArticleCard from '../elements/ArticleCard.vue'
</script>

<template>
    <section id="dalsi-clanky" class="row bg-primary p-3 p-md-5">
        <div class="mb-4">
            <h2 class="text-white text-center">Další články</h2>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-2">
            <ArticleCard id="1" name="Zdanění prodeje vozidla mezi členskými státy EU"
                image="https://picsum.photos/id/306//200/100" annotation="V tomto článku se dozvíte, jak správně zaúčtovat a zdanit koupi a
                            prodej motorového vozidla mezi členskými státy EU." date="29. 8. 2022" text="">
            </ArticleCard>
            <ArticleCard id="2" name="Základy zdanění kryptoměn" image="https://picsum.photos/id/305//200/100"
                annotation="V tomto článku se dozvíte, jak správně zaúčtovat a zdanit koupi a
                            prodej motorového vozidla mezi členskými státy EU." date="22. 7. 2022" text="">
            </ArticleCard>
            <ArticleCard id="3" name="Zdanění v ČR" image="https://picsum.photos/id/304//200/100" annotation="V tomto článku se dozvíte, jak správně zaúčtovat a zdanit koupi a
                            prodej motorového vozidla mezi členskými státy EU." date="21. 8. 2022" text="">
            </ArticleCard>
            <ArticleCard id="4" name="Principy účetnictví" image="https://picsum.photos/id/303//200/100" annotation="V tomto článku se dozvíte, jak správně zaúčtovat a zdanit koupi a
                            prodej motorového vozidla mezi členskými státy EU." date="12. 6. 2022" text="">
            </ArticleCard>
        </div>
    </section>
</template>