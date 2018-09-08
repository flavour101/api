const router = require("express").Router();

router.route("/")
    .get((req, res) => {
        res.send([]); // Send list of reviews
    })

export default router;