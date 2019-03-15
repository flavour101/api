import { Router } from "express";
import recipeRepo from "../repositories/recipe";

const router = Router();

router.route("/")
    .get((req, res, next) => {
        recipeRepo.fetchAll()
            .then(blogs => {
                res.send(blogs);
            })
            .catch(error => {
                next(error);
            })
    })

router.route("/:id")
    .get((req, res, next) => {
        recipeRepo.fetchById(req.params.id)
            .then(recipes => {
                res.send(recipes);
            })
            .catch(error => {
                next(error);
            })
    })

export default router;