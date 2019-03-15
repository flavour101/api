import { Router } from "express";
import galleryRepo from "../repositories/gallery";

const router = Router();

router.route("/")
    .get((req, res, next) => {
        galleryRepo.fetchAll()
            .then(gallery => {
                res.send(gallery);
            })
            .catch(error => {
                next(error);
            })
    })

export default router;