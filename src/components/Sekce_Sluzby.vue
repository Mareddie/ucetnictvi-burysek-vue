<script setup lang="ts">
import Sluzba from './Sluzba.vue'
</script>

<template>
    <section id="sluzby" class="row bg-light">
        <div class="row px-3 px-md-5 pt-3 pt-md-5 pb-3 pb-md-3">
            <Sluzba id="sluzby-ucetnictvi" name="Účetnictví" subtitle="vedení podvojného účetnictví" description="Zpracování podvojného účetnictví pro právnické osoby nebo fyzické osoby vedoucí účetnictví
                    povinně či dobrovolně. Zastupování na příslušných úřadech. Zpracování výkazů pro klienty."
                icon="/src/assets/icons/ucetnictvi.png">
            </Sluzba>
            <Sluzba id="sluzby-mzdove-ucetnictvi" name="Mzdové účetnictví" subtitle="zpracování mezd od A do Z"
                description="Komplexní zpracování mzdové agendy včetně zastupování na příslušných úřadech. Evidence
                            exekucí a insolvence. Poskytování součinnosti pro exekutory a insolvenční správce."
                icon="/src/assets/icons/mzdove-ucetnictvi.png">
            </Sluzba>
        </div>
        <div class="row px-3 px-md-5 pb-3 pb-md-4">
            <Sluzba id="sluzby-danova-evidence" name="Daňová evidence" subtitle="vedení peněžního deníku"
                description="Zpracování daňové evidence pro fyzické osoby vedoucí peněžní deník nebo paušální výdaje."
                icon="/src/assets/icons/danova-evidence.png">
            </Sluzba>
            <Sluzba id="sluzby-danove-priznani" name="Daňové přiznání" subtitle="zpracování daňového přiznání"
                description="Zpracování daňového přiznání k dani z příjmu právnických a fyzických osob, k silniční dani i
                            k dani z
                            nemovitých věcí." icon="/src/assets/icons/danove-priznani.png">
            </Sluzba>
        </div>
    </section>
</template>