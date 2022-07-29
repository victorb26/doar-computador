import Donate from "../models/donationModel.js";
import db from "../infra/db.js";

const donationController = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({ alive: true });
  });

  app.post("/donation", (req, res) => {
    res.status(200);
    const body = req.body;
    console.log(body);
    const donate = new Donate(body.nome, body.email, body.senha);
    db.donate.push(donate);
    res.json({ "Produto cadastrado": donate });
  });
};

export default donationController;
