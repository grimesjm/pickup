var Pickup = require('../../lib/pickup.js');

describe("addPlayer", function() {
  it("adds a player to the current pug", function() {
    Pickup.addPlayer("player");
    var players = Pickup.currentPlayers();
    expect(players[0]).toBe("player");
  });
});

describe("removePlayer", function() {
  it("removes a player to the current pug", function() {
    Pickup.addPlayer("player");
    Pickup.removePlayer("player");
    var players = Pickup.currentPlayers();
    expect(players.length).toBe(0);
  });
});

describe("listPlayers", function(){
 it("returns an empty list when no players have joined",function() {
   expect(Pickup.currentPlayers().length).toBe(0);
 });
});
