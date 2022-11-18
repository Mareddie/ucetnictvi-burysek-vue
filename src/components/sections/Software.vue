<script setup lang="ts">
import SoftwareCard from '../elements/SoftwareCard.vue'
</script>

<template>
    <section id="ucetni-software" class="row p-3 p-md-5">
        <SoftwareCard id="software-pohoda" title="Účtuji v " softwareInDativeCase="Pohodě"
            icon="/src/assets/images/POHODA-box.png" description="POHODA umožňuje vést účetnictví i daňovou evidenci a vyhoví plátcům i neplátcům DPH. Systém je
                oborově
                neutrální a je vhodný nejen pro živnostníky, podnikatele a společnosti, které se zabývají obchodem a
                poskytováním služeb, ale i pro svobodná povolání a účtující příspěvkové a neziskové organizace.">
        </SoftwareCard>
        <SoftwareCard id="software-pamica" title="Mzdy v " softwareInDativeCase="Pamice"
            icon="/src/assets/images/PAMICA-box.png" description="PAMICA je profesionální nástroj na vedení agend personalistiky, pracovních poměrů a zpracování mezd
                    zaměstnanců. Tento software ocení firmy jak s vlastní personální kanceláří, nebo s větším počtem
                    klientů,
                    stejně tak účetní firmy vyžadující profesionální správu dat zaměstnanců a jejich mezd. Práce je
                    možná
                    samostatně ale s případnými exporty závazků a pohledávek do účetního programu POHODA. Aplikace
                    podporuje
                    případné xml importy z docházkových systémů.">
        </SoftwareCard>
    </section>
</template>