import { Router } from "express";
import { saveNoteController } from "../note/saveNoteController";
import { AuthStrategy, checkAuthWith } from "../../auth/strategies";

export const noteRouter = Router();

noteRouter.put("/", checkAuthWith([AuthStrategy.JWT_STRATEGY]), saveNoteController);
