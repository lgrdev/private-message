<template>
  <div class="container">
    <div class="row gx-5">
      <h3>Créer un message privé</h3>
      <div class="col-md-6">
        <p>Envoyez un message privé à quelqu'un en utilisant un lien unique qui s'autodétruira après une première
          lecture ou un laps de temps que vous aurez défini.
        </p>
        <form @submit.prevent="generateMessage" v-if="link == ''">
          <div class="mb-3">
            <label for="expiration">Durée de validité du message</label>
            <select v-model="duration" class="form-select" id="expiration">
              <option value="3600">1 heure</option>
              <option value="86400">24 heures</option>
              <option value="345600">4 jours</option>
              <option value="604800">7 jours</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="message">Message privé</label>
            <textarea v-model="message" class="form-control" rows="4" required id="message" maxlength="500"></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-sm">Générer le message</button>
        </form>
        <div v-if="link" class="mt-3">
          <p>Votre lien privé à transmettre à votre correspondant :<br /> <a :href="link">{{ link }}</a></p>
          <button @click="copyToClipboard(link)" class="btn btn-secondary btn-sm">Copier</button>
        </div>
      </div>
      <div class="col-md-6">
        <Pourquoi />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFetch } from '#app';

const message = ref('');
const duration = ref('3600');
const link = ref('');
const { csrf } = useCsrf();

// Fonction pour encoder le message en Base64
const encodeMessage = (msg) => {
  return btoa(msg);
};

const generateMessage = async () => {
  const encodedMessage = encodeMessage(message.value); // Encodage du message
  const { data } = await useFetch('/api/messages', {
    method: 'POST',
    headers: {
      'csrf-token': csrf, // Ajouter le token CSRF dans les headers
    },
    body: {
      message: encodedMessage,
      duration: duration.value,
    },
  });
  link.value = `${window.location.origin}/read?guid=${data.value.guid}`;
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};
</script>
