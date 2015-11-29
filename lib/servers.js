global.servers = []; //Replace with a file/db/something else
exports.addServer = function(name, metadata){
    global.servers.push({name: name, metadata: metadata});
 };

exports.listServers = function(){
   return global.servers;
 };

exports.removeServer = function(name){
   for(var i = 0; i < global.servers.length; i++){
     if(global.servers[i].name == name){
       global.servers.splice(i,1);
     }
   };
 };
