const request = require("supertest");
const express = require("express");
const app = express();

describe('POST /users test', ()=> {
    const data = {
        "name":"",
        "email":"email@email.com",
        "phone":"",
        "zip":"23230230",
        "city":"Polis",
        "state":"PL",
        "streetAddress":"Polis",
        "number":"23",
        "complement":"Fundos",
        "neighborhood":"Polis",
        "deviceCount":1,
        "devices":
                [
                    {"type":"notebook","condition":"working"},
                ]   
    
    };
    it('Should the return Status(400) and (errorMenssage)',  () => {
      request(app)
        .post('/donation')
        .send(data)
        .expect('errorMessage')
        .expect(400)
        .end(function (err, res) {
            if (err) throw err;
          });
    });


  });