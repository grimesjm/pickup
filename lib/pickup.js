global.currentPlayers = [];
global.maxPlayers = 8;
exports.addPlayer = function(playerName){
 if (global.currentPlayers < global.maxPlayers) {
   global.currentPlayers.push(playerName);
 }
};

exports.removePlayer = function(playerName) {
 for(var i = 0; i < global.currentPlayers.length; i++){
   if(global.currentPlayers[i] == playerName){
        global.currentPlayers.splice(i,1);
   }
 }
};

exports.currentPlayers = function(){
 return global.currentPlayers;
};

exports.isIdle = function(playerName){

}
