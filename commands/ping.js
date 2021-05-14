// start of new command
module.exports = {
    name: 'ping',
    description: "this is a ping command",
    execute(message, args){ // put code down below
        message.channel.send('pong!')
    }
}