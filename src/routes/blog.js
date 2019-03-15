import { Router } from "express";
import blogRepo from "../repositories/blog";

const router = Router();

router.route("/")
    .get((req, res, next) => {
        blogRepo.fetchAll()
            .then(blogs => {
                res.send(blogs);
            })
            .catch(error => {
                next(error);
            })
    })

router.route("/:id")
    .get((req, res, next) => {
        blogRepo.fetchById(req.params.id)
            .then(blog => {
                res.send(blog);
            })
            .catch(error => {
                next(error);
            })
    })

export default router;