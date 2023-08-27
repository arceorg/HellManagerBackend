import { Router, json } from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { notFound } from "./middlewares/notFound";
import { healthRouter } from "./routes/healthRouter";
import { logger } from "../utils/utils";

export const router = Router();

router.use(json());
router.use(logger);

router.use("/health", healthRouter);
router.use("/", healthRouter);

router.use(errorHandler);
router.use(notFound);
