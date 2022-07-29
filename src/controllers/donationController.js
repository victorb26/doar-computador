import Donate from "../models/donationModel.js";
import pkg from "express-validator";
const {body, validationResult} = pkg;
import db from "../infra/db.js";

const donationController = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({ alive: true });
  });

  app.post("/donation",[
    body("email").isEmail()
  ], (req, res) => {
    res.status(200);
    const body = req.body;
    const donate = new Donate(body.nome, body.email, body.senha);
    db.donate.push(donate);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        "error": true,
        "requiredFields": [
            "name",
            "phone",
            "zip",
            "city",
            "state",
            "streetAddress",
            "number",
            "complement",
            "neighborhood",
            "deviceCount",
            "devices"
        ],
        "errorMessage": "Todos os campos obrigatórios devem ser informados"
    })
    }
    res.json({ sucess:true });
  });
};

export default donationController;
