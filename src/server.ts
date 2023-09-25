import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import errorHandlerMiddleware from "./middlewares/handle-error";
import notFoundMiddleware from "./middlewares/not-found";
import routeMain from "./routes";

dotenv.config();

const app = express();
const appName = process.env.APP_NAME || "Vote Yuk";
const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routeMain)

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

app.listen(port, () => console.log(`${appName} listening on port ${port}!`));
