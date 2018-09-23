import { Router } from "express";
import db from "../interfaces/db";

const router = Router();

router.route("/")
    .get((req, res, next) => {
        console.log(req.originalUrl);
        db.query("SELECT * FROM recipe WHERE post_date IS NOT NULL")
            .then(results => {
                res.send(results);
            })
            .catch(error => {
                next(error);
            })
    })

router.route("/:id")
    .get((req, res, next) => {
        console.log(req.originalUrl);
        db.query(`SELECT * FROM recipe WHERE post_date IS NOT NULL AND id=${req.params.id}`)
            .then(results => {
                res.send(results[0]);
            })
            .catch(error => {
                next(error);
            })
    })

export default router;