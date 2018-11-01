import { Router } from "express";
import db from "../interfaces/db";

const router = Router();

router.route("/")
    .get((req, res, next) => {
        db.query("SELECT * FROM blog WHERE post_date IS NOT NULL")
            .then(results => {
                res.send(results);
            })
            .catch(error => {
                next(error);
            })
    })

router.route("/:id")
    .get((req, res, next) => {
        db.query(`SELECT * FROM blog WHERE post_date IS NOT NULL AND id='${req.params.id}'`)
            .then(blogs => {
                const blog = blogs[0];
                blog.images = [];
                db.query(`SELECT * FROM image WHERE reference_id='${req.params.id}' AND reference_type='blog'`)
                    .then(images => {
                        blog.images = images.sort((a, b) => new Date(b.post_date).getTime() - new Date(a.post_date).getTime());
                        res.send(blog);
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