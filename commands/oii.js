module.exports = {
  name: 'oi',
  description: 'Envia uma mensagem de boas-vindas com um GIF!',
  execute(message, args) {
      const welcomeMessage = `OI! , ${message.author}!`; // Mensagem de boas-vindas
      const gifUrl = 'https://media1.tenor.com/m/MmTMEtRSIOUAAAAC/nijima-ibuki-d4dj-first-mix.gif'; // URL do GIF de boas-vindas

      message.channel.send(welcomeMessage)
          .then(() => {
              message.channel.send(gifUrl);
          })
          .catch(console.error);
  },
};