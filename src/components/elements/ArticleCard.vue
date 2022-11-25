<script setup lang="ts">
defineProps<{
    id: string
    name: string,
    annotation: string,
    date: string,
    image: string,
    text: string,
}>()
</script>

<template>
    <div class="col">
        <div class="card">
            <img :src=image class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">{{ name }}</h5>
                <p class="card-text">{{ annotation }}</p>
                <p class="card-text"><small class="text-muted">Poslední aktualizace: {{ date }}</small></p>
                <div class="text-center mt-auto mb-2">
                    <a href="#" class="btn btn-primary">Přečíst článek</a>
                </div>
            </div>
        </div>
    </div>
</template>