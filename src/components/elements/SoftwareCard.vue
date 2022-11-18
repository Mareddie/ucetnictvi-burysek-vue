<script setup lang="ts">
defineProps<{
    id: string,
    title: string,
    softwareInDativeCase: string,
    icon: string,
    description: string,
}>()
</script>

<template>
    <article :id=id class="row">
        <div class="d-md-none text-center">
            <h3>{{ title + softwareInDativeCase }}</h3>
        </div>
        <img class="d-md-none px-5" :src=icon alt="logo POHODA - účetní software" width="200">
        <div class="d-none d-md-block col-md-auto mx-auto">
            <img :src=icon alt="logo POHODA - účetní software" width="200">
        </div>
        <div class="col-md">
            <div class="d-none d-md-block">
                <h3><span class="text-primary">► </span>{{ title }}<span class="word-background">{{
                        softwareInDativeCase.toUpperCase()
                }}</span></h3>
            </div>
            <p>{{ description }}</p>
        </div>
    </article>
</template>