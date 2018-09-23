import { Router } from "express";

const router = Router();

router.route("/")
    .get((req, res) => {
        console.log(req.originalUrl);
        res.send([]);
    })

export default router;