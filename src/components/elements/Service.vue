<script setup lang="ts">
defineProps<{
    id: string,
    name: string,
    subtitle: string,
    description: string,
    icon: string
}>()
</script>

<template>
    <div class="col-md">
        <article :id=id class="row">
            <img class="col-auto" :src=icon width="64" height="64">
            <div class="col">
                <h3>{{ name }}</h3>
                <h5 class="text-secondary">{{ subtitle }}</h5>
                <p>{{ description }}</p>
            </div>
        </article>
    </div>
</template>