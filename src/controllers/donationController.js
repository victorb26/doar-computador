import Donate from "../models/donationModel.js";
import pkg from "express-validator";
const { body, validationResult } = pkg;
import db from "../infra/db.js";

const donationController = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({ alive: true });
  });

  app.post("/donation",
  body("email").isEmail().normalizeEmail(),
  body("phone").isLength({min:10, max:11}),//10 para número fixo e 11 para celulares
  body("zip").isLength(8),
  body("number").isNumeric(),
  body("deviceCount").isNumeric(),
  body("devices").isIn()




  (req, res) => {
    res.status(200);

    const body = req.body;

    const donate = new Donate(body.name, body.email, body.phone, body.zip, body.city, body.state, body.streetAddress, body.number, body.complement, body.neighborhood, body.deviceCount, body.devices);
    db.donate.push(donate);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: true,
        requiredFields: [
          "name",
          "email",
          "phone",
          "zip",
          "city",
          "state",
          "streetAddress",
          "number",
          "complement",
          "neighborhood",
          "deviceCount",
          "devices",
        ],
        errorMessage: "Todos os campos obrigatórios devem ser informados",
      });
    }
    res.json({ sucess: true });
  });
};

export default donationController;
