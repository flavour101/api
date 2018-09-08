import { Router } from "express";
import { query } from "../interfaces/db";

const router = Router();

router.route("/")
    .get((req, res, next) => {
        query("SELECT * FROM recipe")
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