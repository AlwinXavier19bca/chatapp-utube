import express from "express";
import { getMessage, sendMessage } from "../controller/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const messageRoutes = express.Router()

messageRoutes.get("/:id", protectRoute, getMessage)
messageRoutes.post("/send/:id", protectRoute, sendMessage)

export default messageRoutes