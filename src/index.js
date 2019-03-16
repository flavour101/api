import express from "express";
import config from "./config";
import blog from "./routes/blog";
import gallery from "./routes/gallery";
import recipe from "./routes/recipe";
import review from "./routes/review";
import mysql from "./interfaces/mysql";
import mongodb from "./interfaces/mongodb";

console.log(JSON.stringify(config, null, 4));

mysql.test();
mongodb.test();

const app = express();
const router = express.Router();

app.use((req, res, next) => {
    console.log(req.originalUrl);

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
})

router.use("/blog", blog);
router.use("/gallery", gallery);
router.use("/recipe", recipe);
router.use("/review", review);

app.use("/api", router);

app.route("/health")
    .get((req, res) => {
        res.statusCode = 200;
        res.send();
    })

app.listen(config.port, () => {
    console.log("Starting application on port: " + config.port);
})