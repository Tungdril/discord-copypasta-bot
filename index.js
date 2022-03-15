// add the discord.js requirement and intialize Discord.Client
const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.BOT_TOKEN;

//const config = require('./config.json')
// set the prefix for commands
const prefix = '!';

// require fs
const fs = require('fs')
const cheerio = require('cheerio')
const request = require('request')



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
    if (msg.content.includes("cummy")) {
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
    if(msg.author.bot) return;

    const message_to_lower_case = msg.content.toLowerCase();

    if(msg.author.id === '224549612512346112' && message_to_lower_case.includes ("i love you")){
        msg.reply('I love you too!')
    }
    else if(msg.author.id !== '224549612512346112' && message_to_lower_case.includes ("i love you")){
        msg.reply('Fuck off, I only love <@224549612512346112>')
    }
    }
)

//fuck off andi

client.on('message', msg=>{
    if(msg.author.bot) return;

    if(msg.author.id === '711590431997034597'){
        msg.reply('Lösch dich <@711590431997034597>')
    }
    else{
        return;
    }
    }
)

//send images

/*
client.on('message', msg=>{

    const message_to_lower_case = msg.content.toLowerCase();
    
    if(message_to_lower_case === 'meme me up daddy'){
        image(message_to_lower_case);
        }   
    }
)       


//get image url form dogpile and send image

function image(message_to_lower_case){

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "cursed image",
        method: "GET",
        headers: {
            Accept: "text/html",
            "User-Agent": "Chrome"
        }
    };

    request(options, function(error, response, responseBody){
        if(error){
            console.log('error')
            return;
        }

        $ = cheerio.load(responseBody);

        var links = $(".image a.link");

        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

        console.log(urls);

        if(!urls.length){
            console.log('empty')
            return;
        }

        msg.channel.send(urls[Math.floor(Math.random() * urls.length)]);
        }

    )
}

*/



// client token
client.login(process.env.BOT_TOKEN);
