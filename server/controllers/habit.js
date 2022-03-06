import habitModel from "../models/habit.js";
import mongoose from "mongoose";

export const getHabits = async (req, res) => {
  try {
    const response = await habitModel.find();

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
};

export const createHabit = async (req, res) => {
  const data = req.body;

  try {
    const newHabit = new habitModel(data);
    console.log(newHabit);
    const response = await newHabit.save();
    console.log(response);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
};

export const editHabit = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send({ message: "Invalid habit" });
  }

  try {
    const habit = await habitModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).json(habit);
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteHabit = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send({ message: "Invalid habit" });
  }
  try {
    await habitModel.findByIdAndRemove(_id);
    res.status(200).send({ message: "Deleted Successfully" });
  } catch (err) {
    console.log(err);
  }
};
