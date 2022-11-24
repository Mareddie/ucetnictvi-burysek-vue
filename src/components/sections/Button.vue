<script lang="ts">
export default {
    methods: {
        openContactBox() {
            this.$emit('openContactBoxEvent');
        }
    }
}
</script>

<template>
    <section id="poptavka" class="row bg-light py-5">
        <div class="d-grid gap-2 col-8 col-md-5 mx-auto">
            <button class="btn btn-primary btn-lg text-uppercase fw-bold" @click="$emit('openContactBoxEvent')">
                <h3 class="pt-2">Nezávazně poptat účetní služby</h3>
            </button>
        </div>
    </section>
</template>