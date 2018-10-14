import express from "express";
import config from "./config";
import blog from "./routes/blog";
import gallery from "./routes/gallery";
import recipe from "./routes/recipe";
import review from "./routes/review";
import db from "./interfaces/db";

console.log(JSON.stringify(config, null, 4));

db.test();

const app = express();

app.use((req, res, next) => {
    console.log(req.originalUrl);

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();
})

app.use("/blog", blog);
app.use("/gallery", gallery);
app.use("/recipe", recipe);
app.use("/review", review);

app.route("/health")
    .get((req, res) => {
        res.statusCode = 200;
        res.send();
    })

app.listen(config.port, () => {
    console.log("Starting application on port: " + config.port);
})