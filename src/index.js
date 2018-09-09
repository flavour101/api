const express = require("express");
const config = require("./config");
const blog = require("./routes/blog");
const gallery = require("./routes/gallery");
const recipe = require("./routes/recipe");
const review = require("./routes/review");

const app = express();
const router = express.Router();

router.use("/blog", blog);
router.use("/gallery", gallery);
router.use("/recipe", recipe);
router.use("/review", review);

app.use("/api", router);

app.listen(config.port, () => {
    console.log("Starting application on port: " + config.port);
})