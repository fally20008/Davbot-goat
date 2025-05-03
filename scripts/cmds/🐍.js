module.exports = {
  config: {
    name: "😡",
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

    // Réponses pour l'emoji 😉
    if (emoji === "😉") {
      const responses = [
        "😉 yo ça dit quoi ?.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 😭
    if (emoji === "😭") {
      const responses = [
        "Ouais, ouais continue personne ne t'aime ici '",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji ✍️
    if (emoji === "✍️") {
      const responses = [
        "Il faut noter que.....",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

   // Réponses pour l'emoji 🥹
    if (emoji === "🥹") {
      const responses = [
        "💁🧑‍🍼",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
    
   // Réponses pour l'emoji 🍷
    if (emoji === "🍷") {
      const responses = [
        "je suis trop jeune, à notre santé 🍼",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
    
   // Réponses pour l'emoji 😒
    if (emoji === "😒") {
      const responses = [
        "arrêt d'être jaloux petit '",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

   // Réponses pour l'emoji 😶
    if (emoji === "😶") {
      const responses = [
        "tu as perdu t'a langue ou ta bouche ?.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }


   // Réponses pour l'emoji ☝️
    if (emoji === "☝️") {
      const responses = [
        "David mpongo est un génie de la technologie goat ☝️.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 🚶
    if (emoji === "🚶") {
      const responses = [
        "bon allé ne reviens plus",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }


 // Réponses pour l'emoji 😁
    if (emoji === "😁") {
      const responses = [
        "quelle bêtise as-tu encore fait ?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
    
     // Réponses pour l'emoji 🤣
    if (emoji === "🤣") {
      const responses = [
        "arrêt de rire une mouche risquerait d'entrée dans t'a bouche '",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
    
     // Réponses pour l'emoji 😂
    if (emoji === "😂") {
      const responses = [
        "arrêt de rire comme un con ",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
    
     // Réponses pour l'emoji 🌹
    if (emoji === "🌹") {
      const responses = [
        "il y'a pas de rose sans épi '",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
    
     // Réponses pour l'emoji 🙁
    if (emoji === "🙁") {
      const responses = [
        "ne regrette rien continue d'avancer '",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
    
     // Réponses pour l'emoji 🤨
    if (emoji === "🤨") {
      const responses = [
        "tu cachés quoi?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
    
     // Réponses pour l'emoji 🦅
    if (emoji === "🦅") {
      const responses = [
        "🦅 David mpongo l'aigle royal 🦅'",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
    
    // Réponses pour l'emoji 🤧
    if (emoji === "🤧") {
      const responses = [
        "ah ! le bébé, vas faire ton bébé chez ta mère ",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
  }
};
