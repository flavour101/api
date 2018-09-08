import express from "express";
import config from "./config";
import reviewRouter from "./routes/review";

const app = express();
const router = express.Router();

router.use("/review", reviewRouter);

app.use("/api", router);

app.listen(config.port, () => {
    console.log("Starting application on port: " + config.port);
})