import habitModel from "../models/habit.js";
import mongoose from "mongoose";
import moment from "moment";
const getCurrentDate = () => {
  return moment().format("MM-DD-YYYY");
};

export const getHabits = async (req, res) => {
  const { userId } = req;

  try {
    const response = await habitModel.find({ creator: userId });
    res.status(200).json(response);
  } catch (err) {
    err;
  }
};

export const createHabit = async (req, res) => {
  const { userId } = req;
  const data = req.body;
  const dates = req.body.dates;

  try {
    const newHabit = new habitModel({ ...data, creator: userId, dates });
    newHabit;
    const response = await newHabit.save();
    response;
    res.status(200).json(response);
  } catch (err) {
    err;
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
    err.message;
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
    err;
  }
};

export const tickHabit = async (req, res) => {
  const { id: _id } = req.params;
  const nowDate = Object.keys(req.body)[0];
  nowDate;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send({ message: "Invalid habit" });
  }

  try {
    const data = await habitModel.findById(_id);

    const habitDates = data.dates;

    const isDatePresent = habitDates.find((date) => date.date == nowDate);

    const updatedDates = isDatePresent
      ? habitDates
      : [...habitDates, { date: nowDate, isChecked: false }];

    const result = updatedDates.map((da) =>
      da.date !== nowDate ? da : { date: nowDate, isChecked: !da.isChecked }
    );


    const habit = await habitModel.findByIdAndUpdate(
      _id,
      { dates: result },
      { new: true }
    );
    habit;
    res.status(200).json(habit);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
