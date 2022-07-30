import Donate from "../models/donationModel.js";
import pkg from "express-validator";
const { check, validationResult } = pkg;

const donationController = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({ alive: true });
  });

  const condition = ["working", "notworking", "broken"];
  const type = [
    "notebook",
    "desktop",
    "netbook",
    "screen",
    "printer",
    "scanner",
  ];

  app.post(
    "/donation",
    [
      check("name").isString().isLength({ min: 2 }),
      check("name").custom((value) => {
        if (!value) {
          return Promise.reject({
            error: true,
            requiredFields: [
              "name",
              "phone",
              "zip",
              "city",
              "state",
              "streetAddress",
              "neighborhood",
              "deviceCount",
              "devices",
            ],
            errorMessage: "Todos os campos obrigatórios devem ser informados",
          });
        }
        return true;
      }),
      check("email").isEmail().withMessage("Digite um email válido"),
      check("phone").isLength({ min: 10, max: 11 }), //10 para número fixo e 11 para celulares
      check("phone").custom((value) => {
        if (!value) {
          return Promise.reject({
            error: true,
            requiredFields: [
              "name",
              "phone",
              "zip",
              "city",
              "state",
              "streetAddress",
              "neighborhood",
              "deviceCount",
              "devices",
            ],
            errorMessage: "Todos os campos obrigatórios devem ser informados",
          });
        }
        return true;
      }),
      check("zip").isLength(8),
      check("zip").custom((value) => {
        if (!value) {
          return Promise.reject({
            error: true,
            requiredFields: [
              "name",
              "phone",
              "zip",
              "city",
              "state",
              "streetAddress",
              "neighborhood",
              "deviceCount",
              "devices",
            ],
            errorMessage: "Todos os campos obrigatórios devem ser informados",
          });
        }
        return true;
      }),
      check("state").custom(value=>{
        if(!value){
          return Promise.reject({error: true, requiredFields: ["name", "phone","zip","city","state","streetAddress","neighborhood","deviceCount","devices"], errorMessage: "Todos os campos obrigatórios devem ser informados"})
        } 
        return true;
      }),
      check("streetAddress",).custom(value=>{
        if(!value){
          return Promise.reject({error: true, requiredFields: ["name", "phone","zip","city","state","streetAddress","neighborhood","deviceCount","devices"], errorMessage: "Todos os campos obrigatórios devem ser informados"})
        } 
        return true;
      }),
      check("number").custom(value=>{
        if(!value){
          return Promise.reject({error: true, requiredFields: ["name", "phone","zip","city","state","streetAddress","neighborhood","deviceCount","devices"], errorMessage: "Todos os campos obrigatórios devem ser informados"})
        } 
        return true;
      }),
      check("neighborhood",).custom(value=>{
        if(!value){
          return Promise.reject({error: true, requiredFields: ["name", "phone","zip","city","state","streetAddress","neighborhood","deviceCount","devices"], errorMessage: "Todos os campos obrigatórios devem ser informados"})
        } 
        return true;
      }),
      check("deviceCount").isNumeric(),
      check("deviceCount").custom((value) => {
        if (!value) {
          return Promise.reject({
            error: true,
            requiredFields: [
              "name",
              "phone",
              "zip",
              "city",
              "state",
              "streetAddress",
              "neighborhood",
              "deviceCount",
              "devices",
            ],
            errorMessage: "Todos os campos obrigatórios devem ser informados",
          });
        }
        return true;
      }),
      check("devices").isIn([{ type, condition }]),
      check("devices").custom((value) => {
        if (!value) {
          return Promise.reject({
            error: true,
            requiredFields: [
              "name",
              "phone",
              "zip",
              "city",
              "state",
              "streetAddress",
              "neighborhood",
              "deviceCount",
              "devices",
            ],
            errorMessage: "Todos os campos obrigatórios devem ser informados",
          });
        }
        return true;
      }),
    ],
    (req, res) => {
      const body = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      res.status(200).json({ sucess: true });
    }
  );
};

export default donationController;
