var Servers = require('../../lib/servers.js');

describe("addServer", function() {
  it("adds a server with a name and some info data", function() {
    servers = [];
    Servers.addServer("ip1", 'some meta data string');
    var myServers = Servers.listServers();
    expect(servers[0].name).toBe("ip1");
    expect(servers[0].metadata).toBe("some meta data string");
  });
});

describe("removeServer", function() {
  it("adds a server with a name and some info data", function() {
    servers = [];
    Servers.addServer("ip1", 'some meta data string');
    Servers.removeServer("ip1");
    var myServers = Servers.listServers();
    expect(servers.length).toBe(0);
  });
});

describe("listServers", function(){
 it("returns an empty list when no servers exist",function() {
   expect(Servers.listServers().length).toBe(0);
 });
});
