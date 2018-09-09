const Router = require("express").Router;
const db = require("../interfaces/db");

const router = Router();

router.route("/")
    .get((req, res, next) => {
        db.query("SELECT * FROM review")
            .then(results => {
                res.send(results);
            })
            .catch(error => {
                next(error);
            })
    })

router.route("/:id")
    .get((req, res) => {
        res.send({});
    })

module.exports = router;