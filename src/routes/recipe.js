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
    .get((req, res, next) => {
        db.query(`SELECT * FROM recipe WHERE post_date IS NOT NULL AND id='${req.params.id}'`)
            .then(recipes => {
                const recipe = recipes[0];
                recipe.images = [];
                db.query(`SELECT * FROM image WHERE reference_id='${req.params.id}' AND reference_type='recipe'`)
                    .then(images => {
                        recipe.images = images.sort((a, b) => new Date(b.post_date).getTime() - new Date(a.post_date).getTime());
                        res.send(recipe);
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