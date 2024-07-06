module.exports = {
    name: 'ola',
    description: 'Envia uma mensagem de boas-vindas com um GIF!',
    execute(message, args) {
        const welcomeMessage = `Olá! , ${message.author}!`; // Mensagem de boas-vindas
        const gifUrl = 'https://media1.tenor.com/m/6qMfYaxvJGoAAAAC/hi.gif'; // URL do GIF de boas-vindas

        message.channel.send(welcomeMessage)
            .then(() => {
                message.channel.send(gifUrl);
            })
            .catch(console.error);
    },
};

