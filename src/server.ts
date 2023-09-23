import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import errorHandlerMiddleware from "./middlewares/handle-error";
import notFoundMiddleware from "./middlewares/not-found";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
