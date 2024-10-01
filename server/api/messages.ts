import { v4 as uuidv4 } from "uuid";
import redis from "../redis";

export default defineEventHandler(async (event) => {
  // Utilisez `readBody` pour récupérer les données du body de la requête
  const { message, duration } = await readBody(event);
  const guid = uuidv4();

  try {
    // Stocker le message dans Redis avec une expiration
    await redis.setex(guid, parseInt(duration), message);
  } catch (error) {
    console.error("Failed to store message in Redis", error);
    throw createError({
      statusCode: 503,
      message: "Failed to store message in Redis",
    });
  }

  return { guid };
});
