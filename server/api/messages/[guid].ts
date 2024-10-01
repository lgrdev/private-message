import redis from "../../redis";

export default defineEventHandler(async (event) => {
  const { guid } = event.context.params;

  // Récupérer le message depuis Redis
  const message = await redis.get(guid);

  if (message) {
    // Supprimer le message une fois lu
    await redis.del(guid);
    return { message };
  } else {
    // Retourner une erreur si le message n'existe pas
    throw createError({
      statusCode: 404,
      message: "Message inexistant ou expiré",
    });
  }
});
