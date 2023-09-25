import express from "express";
import { register } from "../controllers/auth.controller";

const route = express.Router();

route.post("/register", register);

export default route;
