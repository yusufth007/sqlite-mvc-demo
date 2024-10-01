import express from "express";
import DashboardController from "../controllers/DashboardController.js";
import Auth from "../Auth.js";

const dashboardController =new DashboardController()
const auth = new Auth();

const router = express.Router();

router.get('/', auth.protectRoute, dashboardController.dashboardView);


export default router;