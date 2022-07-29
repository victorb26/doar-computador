import express from "express";
import donate from './donationRoute.js';



const routes = (app) => {
  
  app.route('/').get((req, res) => { res.status(200).json({ alive: true });
});

app.use(express.json(),donate);

}
export default routes;