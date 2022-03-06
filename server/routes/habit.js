import express from "express";
import {
  getHabits,
  createHabit,
  editHabit,
  deleteHabit,
} from "../controllers/habit.js";

const router = express.Router();
router.get("/", getHabits);
router.post("/", createHabit);
router.patch("/edit/:id", editHabit);
router.delete("/delete/:id", deleteHabit);
export default router;
