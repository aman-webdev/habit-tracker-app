import express from "express";
import auth from "../middlewares/auth.js";
import {
  getHabits,
  createHabit,
  editHabit,
  deleteHabit,
  tickHabit,
} from "../controllers/habit.js";

const router = express.Router();
router.get("/", auth, getHabits);
router.post("/", auth, createHabit);
router.patch("/edit/:id", auth, editHabit);
router.patch("/tick/:id", auth, tickHabit);
router.delete("/delete/:id", auth, deleteHabit);
export default router;
