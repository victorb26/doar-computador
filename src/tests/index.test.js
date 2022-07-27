const request = require("supertest");
const express = require("express");
const app = express();

app.get("/", (req, res) => res.status(200).json({ alive: true }));

test("retornar true", () => {
  request(app)
    .get("/")
    .expect({ alive: true })
    .expect(200)
    .end(function (err, res) {
      if (err) throw err;
    });
});
