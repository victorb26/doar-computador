import express from "express";



const routes = (app) => {
  app.use(express.json());
  app.get("/", (req, res) => res.status(200).json({ alive: true }));
};


export default routes;
