import Donate from "../models/donationModel.js";
import pkg from "express-validator";
const { check, validationResult } = pkg;
import db from "../infra/db.js";

const donationController = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({ alive: true });
  });

  const condition = [
    "working",
    "notworking",
    "broken",
    ];
  const type =[
    "notebook",
    "desktop",
    "netbook",
    "screen",
    "printer",
    "scanner"
  ];

  app.post(
    "/donation",
    [
      check("email").isEmail().normalizeEmail(),
      check("phone").isLength({ min: 10, max: 11 }), //10 para número fixo e 11 para celulares
      check("zip").isLength(8),
      check("deviceCount").isInt(),
      check("devices").isIn([{type, condition}])
    ],
    (req, res) => {
      const body = req.body;

      const donate = new Donate(
        body.name,
        body.email,
        body.phone,
        body.zip,
        body.city,
        body.state,
        body.streetAddress,
        body.number,
        body.complement,
        body.neighborhood,
        body.deviceCount,
        body.devices
      );
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
      res.status(200).json({ sucess: true });
    }
  );
};

export default donationController;
