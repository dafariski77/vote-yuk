import express from "express";
import authRoute from "./auth.route";

const route = express();

route.use("/auth", authRoute);

export default route;
