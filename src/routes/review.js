import { Router } from "express";
import reviewRepo from "../repositories/review";

const router = Router();

router.route("/")
    .get((req, res, next) => {
        reviewRepo.fetchAll()
            .then(reviews => {
                res.send(reviews);
            })
            .catch(error => {
                next(error);
            })
    })

router.route("/:id")
    .get((req, res, next) => {
        reviewRepo.fetchById(req.params.id)
            .then(review => {
                res.send(review);
            })
            .catch(error => {
                next(error);
            })
    })

export default router;