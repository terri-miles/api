import express from "express";
import {
 addMessage
} from "../controllers/message.controller.js";
import { verifyToken } from "../middleware/verifiedToken.js";

const router = express.Router();

router.route("/messages/:chatId").post(verifyToken,addMessage);


export default router;
