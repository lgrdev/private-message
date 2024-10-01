<template>
  <div class="container">
    <div class="row gx-5">
      <h3>Lire un message privé</h3>
      <div class="col-md-6">
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <div v-if="message">
          <p>Message privé : </p>
        </div>
        <div v-if="message" class="border border-primary rounded-2 p-2">
          <div v-html="message"></div>
        </div>
        <div v-if="message" class="row p-2">
          <div class="col">
            <button @click="copyToClipboard(message)" class="btn btn-secondary btn-sm">Copier</button>
          </div>
          <div class="col">
            <NuxtLink to="/"><button class="btn btn-primary btn-sm">Nouveau message</button></NuxtLink>
          </div>
        </div>
        <button v-if="!message && !error" @click="fetchMessage" class="btn btn-primary btn-sm">Afficher votre message</button>
      </div>
      <div class="col-md-6">
        <Pourquoi />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from '#app';
import Pourquoi from '~/components/Pourquoi.vue';

const message = ref(null);
const error = ref(null);
const route = useRoute();

// Fonction pour décoder le message en Base64
const decodeMessage = (encodedMsg) => {
  return atob(encodedMsg);
};

const fetchMessage = async () => {
  try {
    const data = await $fetch(`/api/messages/${route.query.guid}`);
    message.value = decodeMessage(data.message).replace(/(?:\r\n|\r|\n)/g, '<br>');
  } catch (err) {
    error.value = 'Message inexistant ou expiré';
  }
};
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text.replace(/<br\s*\/?>/gi, '\n'));
};
</script>
