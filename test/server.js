var request = require('supertest');
describe('Testing express server', function(){
    var server;
    beforeEach(function(){
        server = require('../server');
    });
    afterEach(function(){
        server.close();
    });
    it('Responds to /', function testRoot(done){
        request(server)
            .get('/')
            .expect(200, done);
    });
    it('Returns 404 for everything else', function testPath(done){
        request(server)
            .get('/api/no/endpoint')
            .expect(404, done);
    });
})