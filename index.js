// add the discord.js requirement and intialize Discord.Client
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.BOT_TOKEN;
//const config = require('./config.json')
// set the prefix for commands
const prefix = '!';

// require fs
const fs = require('fs')

// no idea
client.commands = new Discord.Collection();

// make sure it only takes .js files as commands
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command);
}

// indicate status after node . | also tests source.txt if enabled
client.on('ready', () =>{
    console.log('Im here Bitch!');
    console.log(randomCpy)
})
 
// replies with gay after someone types gay
client.on('message', msg=>{
    if(msg.content === "gay"){
        msg.reply('gay')
    }
})


// create first random pasta just because I don't get any errors this way
var text = fs.readFileSync("./source.txt").toString('utf-8');
var textByLine = text.split("\n");
var randomCpy = textByLine[Math.floor(Math.random() * textByLine.length)];

//TODO find a solution for the 2000 char max problem
client.on('message', msg=>{
    if (msg.content === "cummy") {
        var text = fs.readFileSync("./source.txt").toString('utf-8');
        var textByLine = text.split("\n");
        var randomCpy = textByLine[Math.floor(Math.random() * textByLine.length)];
        //msg.reply(randomCpy, {split: true})
        msg.channel.send(randomCpy, {split: true})
        }
    }
)

//somebody love me pls
client.on('message', msg=>{
    if(msg.author.id === 224549612512346112 && msg.content == "I love you"){
        msg.reply('I love you too!')
    }
    }
)


// kick user from VC




/* Don't need that right now

// listen for messages with prefix and use the scripts in the commands folder to reply
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
       client.commands.get('ping').execute(message, args);
    }
    else if(command === 'copypasta'){
        client.commands.get('copypasta').execute(message, args);
    }
})

*/
// client token
client.login(process.env.BOT_TOKEN);
