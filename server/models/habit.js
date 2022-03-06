import mongoose from "mongoose";

const habitSchema = mongoose.Schema({
  habitName: String,
  habitDescription: String,
  habitFrequency: [Number],
});

export default mongoose.model("Habit", habitSchema);
