import { Router } from "express";
import db from "../interfaces/db";

const router = Router();

router.route("/")
    .get((req, res, next) => {
        db.query("SELECT * FROM recipe WHERE post_date IS NOT NULL")
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

export default router;