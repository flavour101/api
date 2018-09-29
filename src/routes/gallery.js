import { Router } from "express";
import db from "../interfaces/db";

const router = Router();

router.route("/")
    .get((req, res, next) => {
        let promises = [];

        promises.push(
            db.query("SELECT * FROM image WHERE post_date IS NOT NULL ORDER BY post_date DESC")
                .catch(error => {
                    next(error);
                })
        )

        // TODO - Get Instagram photos

        let response = [];
        Promise.all(promises).then(values => {
            response = response.concat(...values);

            // TODO - Sort response
            
            res.send(response);
        })
    })

export default router;