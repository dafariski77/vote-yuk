import express from "express";
import {
  destroy,
  index,
  insert,
  show,
  update,
} from "../controllers/user.controller";

const route = express.Router();

route.get("/", index);
route.get("/:id", show);
route.post("/", insert);
route.put("/:id", update);
route.delete("/:id", destroy);

export default route;
