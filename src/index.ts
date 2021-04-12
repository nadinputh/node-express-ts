/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import compression from "compression";
import requestId from "express-request-id";
import cors from "cors";
import helmet from "helmet";
import morgan from "./utils/morgan";
import logger from "./utils/logger";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */
app.use(compression());
app.use(requestId());
app.use(helmet());
app.use(
  cors({
    origin: "localhost:*",
  })
);
app.use(express.json());
app.use(morgan);

app.get("/", function (req, res) {
  res.send("hello, world!");
});

/**
 * Server Activation
 */
app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
