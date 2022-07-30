import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import donationController from './controllers/donationController.js';
import { body } from "express-validator";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

donationController(app);

export default app;