import  express  from "express";
import DonateController from "../controllers/donationController.js";

const router = express.Router();

router.post('/donation', DonateController.insertDonate);

export default router;