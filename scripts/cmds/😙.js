module.exports = {
  config: {
    name: "😠😡",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses sarcastiques et insultantes aux emojis",
    longDescription: "Réponses sarcastiques et insultantes aux emojis envoyés",
    category: "reply",
  },

  onStart: async function() {},

  onChat: async function({ event, message }) {
    const emoji = event.body.trim();

    // Réponses pour l'emoji 🙂
    if (emoji === "🙂") {
      const responses = [
        "Ah, voilà l'expression du champion de bonnes humeur C’est tout ce que tu sais faire ?",
        "Sérieusement, encore cette tête-là ?  .",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 🖕
    if (emoji === "🖕") {
      const responses = [
        "Ouais, tu es vraiment mal éduquer ",
        "tu es un raté .",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 🦅
    if (emoji === "🦅") {
      const responses = [
        "David est un génie de la technologie que vous le voulez ou pas  .",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 🕊️
    if (emoji === "🕊️") {
      const responses = [
        "Ah, le visage de l'esprit Saint surgi",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 🌼
    if (emoji === "🌼") {
      const responses = [
        "la persévérance est la clé du succès",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
  }
};
