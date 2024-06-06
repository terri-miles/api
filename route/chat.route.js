import express from "express";
import {
  getChats,
  getChat,
  addChat,
  readChat,
} from "../controllers/chat.controller.js";
import { verifyToken } from "../middleware/verifiedToken.js";

const router = express.Router();

router.route("/chats").get(verifyToken, getChats);
router.route("/chats/:id").get(verifyToken, getChat);
router.route("/chats/:id").post(verifyToken, addChat);
router.route("/chats/read/:id").put(verifyToken, readChat);
export default router;
