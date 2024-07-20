import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";

const router = express.Router()

// signup routes
router.post("/signup", signup)

// login routes
router.post("/login", login)

// logout routes
router.get("/logout", logout)

export default router