<template>
  <div>
    <Header />

    <!-- Main content -->
    <main class="container mt-5">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Messages privés',
  ogTitle: 'Messages privés temporisés',
  description: 'Créez et partagez des messages privés avec une durée de vie limitée grâce à cette application.',
  ogDescription: 'Partagez des messages privés sécurisés, qui sont supprimés après lecture ou expiration.',
  ogImage: 'https://privatemessage.ovh/images/privatemessage.webp', // Remplacez par le lien de votre image d'aperçu
  // twitterCard: 'summary_large_image',
  // twitterSite: '@votre_site', // Remplacez par votre compte Twitter
  ogUrl: 'https://privatemessage.ovh', 
});
</script>

<style>
/* Add some basic padding to the main container */
main.container {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
