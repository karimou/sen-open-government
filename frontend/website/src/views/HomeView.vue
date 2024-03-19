
<script setup>
  import AppFooter from '@/components/AppFooter.vue';
  import logoDs from '@/assets/logo-DS.png';

</script>
<template>
    <nav class="flex align-items-center justify-content-center gap-10 md:gap-0">
        <div class="md:w-1 ml-2">
            <a href="https://www.demainsenegal.sn/" target="_blank">
                <img :src="logoDs" class="w-11 h-11" style="max-height: 60px;">
            </a>
        </div>
    </nav>
  <main >
    <div style="width: 500px; margin:auto">
      <p>
        DEMAIN SÉNÉGAL a pour objet de contribuer à la réflexion citoyenne pour traiter des problématiques sociales et économiques du Sénégal et participer à l’amélioration du quotidien des Sénégalais.
      </p>
      <p>
        DEMAIN SÉNÉGAL est une initiative citoyenne dont la mission est de réunir des acteurs sénégalais autour de débats non partisans et ouverts permettant d’aborder sans complaisance les questions posées par des Personas représentatifs de toutes les régions du Sénégal, de tous les âges et de toutes les couches sociales.
        À ce titre, l’Association effectuera un suivi actif de la réponse apportée à la demande citoyenne, notamment sur les cinq piliers que sont la Santé, l’Éducation, l’Habitat et le Cadre de Vie, l’Emploi et l’Entrepreneuriat, la Bonne Gouvernance et l’État de Droit.
      </p>
      <p>
        DEMAIN SÉNÉGAL remercie les participants aux enquêtes sur la Demande Citoyenne et tous ceux qui ont contribué aux travaux et débats dont les résultats ont permis la rédaction de ce Livre Blanc.
      </p>
    </div>

    <AppFooter />
  </main>
</template>
