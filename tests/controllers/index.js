const chai = require('chai');
const chaiHttp = require('chai-http');
const express = require('express');
const server = express();

const should = chai.should();
chai.use(chaiHttp);

describe('index', function(){
  it('should render the index page on / GET', function(done){
    chai.request(server)
      .get('/')
      .end(function(err, res) {
          res.should.have.status(200);
          done();
      });
  });
});
