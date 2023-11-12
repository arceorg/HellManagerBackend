import { Router, json } from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { notFound } from "./middlewares/notFound";
import { healthRouter } from "./routes/healthRouter";
import { authRouter } from "./routes/authRouter";
import { logger } from "./middlewares/loggerRequests";
import { AuthStrategy, JwtStrategy, LocalStrategy } from "../auth/strategies";
import passport from "passport";
import { scheduleRouter } from "./routes/scheduleRouter";
import { groupRouter } from "./routes/groupRouter";
import { studentRouter } from "./routes/studentRouter";
import { careerRouter } from "./routes/careerRouter";

export const router = Router();

passport.use(AuthStrategy.LOCAL_STRATEGY, LocalStrategy);
passport.use(AuthStrategy.JWT_STRATEGY, JwtStrategy);
router.use(passport.initialize());

router.use(json());
router.use(logger);

router.use("/health", healthRouter);
router.use("/", healthRouter);
router.use("/auth", authRouter);
router.use("/schedule", scheduleRouter);
router.use("/group", groupRouter);
router.use("/student", studentRouter);
router.use("/career", careerRouter);

router.use(notFound);
router.use(errorHandler);
