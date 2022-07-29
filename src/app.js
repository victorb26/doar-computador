import express from "express";
import cors from "cors";
import donationController from './controllers/donationController.js';

const app = express();
app.use(express.json());
app.use(cors());

donationController(app);

export default app;