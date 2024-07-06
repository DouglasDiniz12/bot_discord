module.exports = {
  name: 'boa noite',
  description: 'Envia uma mensagem de boas-vindas com um GIF!',
  execute(message, args) {
      const welcomeMessage = `Boa noite! , ${message.author}!`; // Mensagem de boas-vindas
      const gifUrl = 'https://media1.tenor.com/m/CAd60w-n5DAAAAAC/guh.gif'; // URL do GIF de boas-vindas

      message.channel.send(welcomeMessage)
          .then(() => {
              message.channel.send(gifUrl);
          })
          .catch(console.error);
  },
};