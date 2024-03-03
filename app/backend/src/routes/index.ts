import { Router } from "express";
import loginRouter from "./login.routes";

const router = Router();

router.use('/login', loginRouter);
router.use('/users', loginRouter);

export default router;