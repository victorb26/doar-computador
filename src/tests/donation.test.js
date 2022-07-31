const request = require("supertest");
const express = require("express");
const app = express();

describe("POST /users test", () => {
  it("Should the return Status(400) and (errorMessage)", () => {
    const data = {
      name: "",
      email: "email@email.com",
      phone: "",
      zip: "23230230",
      city: "Polis",
      state: "PL",
      streetAddress: "Polis",
      number: "23",
      complement: "Fundos",
      neighborhood: "Polis",
      deviceCount: 1,
      devices: [{ type: "notebook", condition: "working" }],
    };

    request(app)
      .post("/donation")
      .send(data)
      .expect("errorMessage")
      .expect(400);
  });

  it('Should return Status(400) and body {error: true, errorMessage: "E-mail invalido"}', () => {
    const data = {
      name: "Victor",
      email: "emailemail.com",
      phone: "21982293270",
      zip: "23230230",
      city: "Polis",
      state: "PL",
      streetAddress: "Polis",
      number: "23",
      complement: "Fundos",
      neighborhood: "Polis",
      deviceCount: 1,
      devices: [{ type: "notebook", condition: "working" }],
    };

    request(app)
      .post("/donation")
      .send(data)
      .expect({ error: true, errorMessage: "E-mail invalido" })
      .expect(400);
  });
  it('Should return Status(400) and body {error: true,  requiredFields: [devices],  errorMessage: "Todos os campos obrigatórios devem ser informados" }', () => {
    const data = {
      name: "Victor",
      email: "email@email.com",
      phone: "21982293270",
      zip: "23230230",
      city: "Polis",
      state: "PL",
      streetAddress: "Polis",
      number: "23",
      complement: "Fundos",
      neighborhood: "Polis",
      deviceCount: 1,
      devices: [],
    };

    request(app)
      .post("/donation")
      .send(data)
      .expect({
        error: true,
        requiredFields: [devices],
        errorMessage: "Todos os campos obrigatórios devem ser informados",
      })
      .expect(400);
  });
});
