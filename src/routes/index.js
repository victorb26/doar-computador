import express from "express";
import donates from "./donateRoute.js";

const  routes = app => {

app.get("/", (req, res) => res.status(200).json({ alive: true }));

app.use(
    express.json(),
    donates
    
)
} 

export default routes;
