const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits, Collection } = require('discord.js');
require('dotenv').config(); // Para carregar variáveis de ambiente do arquivo .env

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

; // Carrega o token do arquivo .env

const token = process.env.TOKEN


// Carregar comandos
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot está online!');
});





client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'cafe') {
        client.commands.get('cafe').execute(message);
    } else if (message.content.toLowerCase() === 'ola') {
        client.commands.get('ola').execute(message);
    } 
    else if (message.content.toLowerCase() === 'pinga') {
        client.commands.get('pinga').execute(message);
    } else if (message.content.toLowerCase() === 'bom dia') {
        client.commands.get('bom dia').execute(message);
    }
    else if (message.content.toLowerCase() === 'boa tarde') {
        client.commands.get('boa tarde').execute(message);
    }
    else if (message.content.toLowerCase() === 'boa noite') {
        client.commands.get('boa noite').execute(message);
    }
    else if (message.content.toLowerCase() === 'oi' || message.content.toLowerCase() === 'oii') {
        client.commands.get('oi').execute(message);
    }
    else if (message.content.toLowerCase() === 'tchau' || message.content.toLowerCase() === 'xau') {
        client.commands.get('tchau').execute(message);
    }
    
    
});

client.login(token);