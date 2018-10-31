import { Router } from "express";
import db from "../interfaces/db";

const router = Router();

router.route("/")
    .get((req, res, next) => {
        db.query("SELECT * FROM review WHERE post_date IS NOT NULL")
            .then(results => {
                res.send(results);
            })
            .catch(error => {
                next(error);
            })
    })

router.route("/:id")
    .get((req, res, next) => {
        db.query(`SELECT * FROM review WHERE post_date IS NOT NULL AND id='${req.params.id}'`)
            .then(reviews => {
                const review = reviews[0];
                review.images = [];
                db.query(`SELECT * FROM image WHERE reference_id='${req.params.id}' AND reference_type='review'`)
                    .then(images => {
                        images.forEach(image => {
                            review.images.push(image.source);
                        })
                        res.send(review);
                    })
                    .catch(error => {
                        next(error);
                    })
            })
            .catch(error => {
                next(error);
            })
    })

export default router;