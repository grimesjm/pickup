var Servers = require('./lib/servers.js')
var Schoolyard = require('./lib/schoolyard.js')
var Pickups = require('./lib/pickup.js');
var parse = require('minimist')
var Discord = require("discord.js");

var mybot = new Discord.Client();

var formatServers =  function(servers){
  var msg = "\n";
  servers.forEach(function(server){
    msg += server.name + ": " + server.metadata + "\n"
  });
  return msg;
}

var formatPlayers = function(players){
  var msg = "\n[" + global.currentPlayers.length + "/" + global.maxPlayers + "] ";
  players.forEach(function(player){
    msg += player + ", "
  });
  return msg;
}
mybot.on("message", function(message){
  //TODO: Need to work on a less clunky way to parse commands and their arguments. Positional and handling spaces
  var options = parse(message.content.split(' '));
  var command = message.content.split(' ')[0]
  if (message.content.split(' ').length == 1)
    command = message.content
//TODO: This could probably be made such that you 'register' a command like a plugin
//we could also move the formatting into the command plugin: Discord supports markdown.
  switch(command) {
    case '!servers':
      mybot.reply(message, formatServers(Servers.listServers()));
      break;
    case "!addserver":
      Servers.addServer(options.name, options.metadata);
      break;
    case '!delserver':
      Servers.removeServer(options._[1]);
    case '!j':
    case '!join':
      Pickups.addPlayer(message.author.username);
      mybot.reply(message,formatPlayers(Pickups.currentPlayers()));
      break;
    case '!l':
    case '!leave':
      Pickups.removePlayer(message.author.username);
      mybot.reply(message,formatPlayers(Pickups.currentPlayers()));
      break;
    case '!ls':
    case '!list':
      mybot.reply(message,formatPlayers(Pickups.currentPlayers()));
      break;
  }
});

mybot.login("", "");
