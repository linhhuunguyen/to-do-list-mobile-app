import express from "express";
import userRoute from "./userRouter.js";
import todoRoute from "./todoRouter.js";

const router = express.Router();

router.use(userRoute);
router.use(todoRoute);

export default router;
