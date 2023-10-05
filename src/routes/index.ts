import express from "express";
import authRoute from "./auth.route";
import userRoute from "./user.route";
import { authenticateUser } from "../middlewares/auth";

const route = express.Router();

route.use("/auth", authRoute);
route.use("/user", authenticateUser, userRoute);

export default route;
