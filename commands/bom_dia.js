module.exports = {
  name: 'bom dia',
  description: 'Envia uma mensagem de boas-vindas com um GIF!',
  execute(message, args) {
      const welcomeMessage = `Bom dia! , ${message.author}!`; // Mensagem de boas-vindas
      const gifUrl = 'https://media1.tenor.com/m/6IicLfOaw1AAAAAC/tora-dora-good-morning.gif'; // URL do GIF de boas-vindas

      message.channel.send(welcomeMessage)
          .then(() => {
              message.channel.send(gifUrl);
          })
          .catch(console.error);
  },
};