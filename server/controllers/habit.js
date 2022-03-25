import habitModel from "../models/habit.js";
import mongoose from "mongoose";
import moment from "moment";
const getCurrentDate = () => {
  return moment().format("MM-DD-YYYY");
};

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
  const dates = req.body.dates;

  try {
    const newHabit = new habitModel({ ...data, dates });
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

export const tickHabit = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send({ message: "Invalid habit" });
  }

  try {
    const date = getCurrentDate();
    const data = await habitModel.findById(_id);

    const result = data.dates.map((da) =>
      da[date] === undefined ? da : { [date]: !da[date] }
    );

    const habit = await habitModel.findByIdAndUpdate(
      _id,
      { dates: result },
      { new: true }
    );
    console.log(habit);
    res.status(204).json(habit);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
