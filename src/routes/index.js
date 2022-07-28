import express from "express";

let data = [];

const app = express();

const routes = app =>{
app.use(express.json());

app.get("/", (req, res) => res.status(200).json({ alive: true }));
}

/*app.post("/donation", (req, res) => {
  const {
    name,
    email,
    phone,
    zip,
    city,
    state,
    streetAddress,
    number,
    complement,
    neighborhood,
    deviceCount,
    devices: [{ type, condition }],
  } = req.body;

  const user = {
    name,
    email,
    phone,
    zip,
    city,
    state,
    streetAddress,
    number,
    complement,
    neighborhood,
    deviceCount,
    devices: [{ type, condition }],
  };
  data.push(user);
  return res.status(200).json(user);
});*/

export default routes;
