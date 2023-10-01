import { Router, json } from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { notFound } from "./middlewares/notFound";
import { healthRouter } from "./routes/healthRouter";
import { authRouter } from "./routes/authRouter";
import { logger } from "./middlewares/loggerRequests";
import { AuthStrategy, LocalStrategy } from "../auth/strategies";
import passport from "passport";

export const router = Router();

passport.use(AuthStrategy.LOCAL_STRATEGY, LocalStrategy);
router.use(passport.initialize());

router.use(json());
router.use(logger);

router.use("/health", healthRouter);
router.use("/", healthRouter);
router.use("/auth", authRouter);

router.use(notFound);
router.use(errorHandler);
