import express from "express";
import {
  getHabits,
  createHabit,
  editHabit,
  deleteHabit,
  tickHabit,
} from "../controllers/habit.js";

const router = express.Router();
router.get("/", getHabits);
router.post("/", createHabit);
router.patch("/edit/:id", editHabit);
router.patch("/tick/:id", tickHabit);
router.delete("/delete/:id", deleteHabit);
export default router;
