const chai = require('chai');
const chaiHttp = require('chai-http');

const { app , runServer, closeServer } = require('../server.js');

const expect = chai.expect;

chai.use(chaiHttp);

describe('/', function() {
  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();;
  });

  it('should return 200 status and HTML when root url is hit', function(done) {
    return chai.request(app)
    .get('/')
    .then(function(res) {
      expect(res).to.have.status(200);
      expect(res).to.be.html;
    });
  });
});
