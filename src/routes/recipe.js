const router = require("express").Router();

router.route("/")
    .get((req, res) => {
        res.send([]);
    })

router.route("/:id")
    .get((req, res) => {
        res.send({});
    })

export default router;