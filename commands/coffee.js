module.exports = {
  name: 'cafe',
  description: 'Envia uma mensagem de boas-vindas com um GIF!',
  execute(message, args) {
      const welcomeMessage = `seu cafe! , ${message.author}!`; // Mensagem de boas-vindas
      const gifUrl = 'https://media1.tenor.com/m/-tkAkoB_D1gAAAAd/sb.gif'; // URL do GIF de boas-vindas

      message.channel.send(welcomeMessage)
          .then(() => {
              message.channel.send(gifUrl);
          })
          .catch(console.error);
  },
};