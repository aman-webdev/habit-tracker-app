import mongoose from "mongoose";

// const dateSchema = mongoose.Schema({
//   name: "Date",
//   embedded: True,
//   properties: {
//     date: String,
//     isChecked: Boolean,
//   },
// });

const habitSchema = mongoose.Schema({
  habitName: String,
  habitDescription: String,
  habitFrequency: [Number],
  dates: { type: Array },
  creator: { type: String, required: true },
});

export default mongoose.model("Habit", habitSchema);
