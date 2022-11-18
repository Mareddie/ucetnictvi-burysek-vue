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
    <section id="vedeni-ucetnictvi" class="row jumbotron">
        <div class="p-3 p-md-5 rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold jumbotron-text">Vedení účetnictví</h1>
                <p class="col-md-8 fs-4 jumbotron-text">daňová evidence, podvojné účetnictví, mzdové účetnictví</p>
                <button class="btn btn-primary btn-lg" type="button" @click="openContactBox">Nezávazně poptat účetní
                    služby</button>
            </div>
        </div>
    </section>
</template>
