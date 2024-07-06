module.exports = {
  name: 'welcome',
  description: 'Envia uma mensagem de boas-vindas com um GIF!',
  execute(message, args) {
      const welcomeMessage1 = `seu cafe! , ${message.author}!`; // Mensagem de boas-vindas
      const gifUrl = 'https://media1.tenor.com/m/-420uI8y-RkAAAAd/anime-welcome.gif'; // URL do GIF de boas-vindas

      message.channel.send(welcomeMessage1)
          .then(() => {
              message.channel.send(gifUrl);
          })
          .catch(console.error);
  },
};
