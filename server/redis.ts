
import Redis from "ioredis";

const config = useRuntimeConfig(); // Accéder à la configuration Nuxt
const redis = new Redis({
    host: config.secretRedisHost,       // Host récupéré depuis les secrets
    port: parseInt(config.secretRedisPort),  // Port récupéré depuis les secrets
    password: config.secretRedisPassword || undefined, // Mot de passe si nécessaire
});

export default redis;