module.exports = {
  name: 'boa tarde',
  description: 'Envia uma mensagem de boas-vindas com um GIF!',
  execute(message, args) {
      const welcomeMessage = `Boa Tarde! , ${message.author}!`; // Mensagem de boas-vindas
      const gifUrl = 'https://media1.tenor.com/m/Liphi3nVt6sAAAAC/boa-tarde.gif'; // URL do GIF de boas-vindas

      message.channel.send(welcomeMessage)
          .then(() => {
              message.channel.send(gifUrl);
          })
          .catch(console.error);
  },
};