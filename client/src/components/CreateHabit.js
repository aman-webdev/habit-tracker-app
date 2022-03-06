import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { createHabit } from "../actions/habits";
import { useDispatch } from "react-redux";

const CreateHabit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const customStyles = {
    content: {
      width: "50%",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      //   justifyContent: "center",
      alignItems: "center",
    },
  };

  Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,.3)";

  const isOpen = true;

  const [habitData, setHabitData] = useState({
    habitName: "",
    habitDescription: "",
    habitFrequency: [0, 0, 0, 0, 0, 0, 0],
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setHabitData({ ...habitData, [name]: value });
  };

  const onFrequencyChangeHandler = (e) => {
    const { name } = e.target;
    const habitFreq = habitData.habitFrequency.map((day, i) =>
      i === parseInt(name) ? (e.target.checked === true ? 1 : 0) : day
    );
    setHabitData({ ...habitData, habitFrequency: habitFreq });
  };

  const closeModal = () => {
    navigate("/");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createHabit(habitData));
    navigate("/");
  };

  if (!isOpen) return null;
  return (
    <Modal onRequestClose={closeModal} isOpen={isOpen} style={customStyles}>
      <h3 className="text-xl my-8 text-[#3E1D46] font-medium">Add a habit</h3>
      <form className="w-full" onSubmit={onSubmitHandler}>
        <div className="w-1/2 my-4 mx-auto ">
          <label className="block" htmlFor="habit-name">
            Habit
          </label>
          <input
            onChange={onChangeHandler}
            className="py-2 px-4 w-full bg-[rgba(0,0,0,.1)] focus:outline-none"
            id="habit-name"
            name="habitName"
            type="text"
          />
        </div>
        <div className="w-1/2 my-4 mx-auto  ">
          <label className="block" htmlFor="habit-description">
            Habit Description
          </label>
          <input
            onChange={onChangeHandler}
            id="habit-description"
            type="text"
            name="habitDescription"
            className="py-2 px-4 w-full bg-[rgba(0,0,0,.1)] focus:outline-none"
          />
        </div>
        <div className="w-1/2 my-4 mx-auto">
          <label htmlFor="">Frequency</label>
          <div className="w-full flex">
            <div>
              <input
                type="checkbox"
                onChange={onFrequencyChangeHandler}
                id="sunday"
                name="0"
                value="sunday"
              />
              <label for="sunday">Sun</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={onFrequencyChangeHandler}
                id="monday"
                name="1"
                value="monday"
              />
              <label for="monday">Mon</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={onFrequencyChangeHandler}
                id="tuesday"
                name="2"
                value="tuesday"
              />
              <label for="tuesday">Tue</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={onFrequencyChangeHandler}
                id="wednesday"
                name="3"
                value="wednesday"
              />
              <label for="wednesday">Wed</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={onFrequencyChangeHandler}
                id="thursday"
                name="4"
                value="thursday"
              />
              <label for="thursday">Thur</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={onFrequencyChangeHandler}
                id="friday"
                name="5"
                value="friday"
              />
              <label for="friday">Fri</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={onFrequencyChangeHandler}
                id="saturday"
                name="6"
                value="saturday"
              />
              <label for="saturday">Sat</label>
            </div>
          </div>
        </div>
        <button type="submit" className="mx-auto w-1/4 bg-slate-200">
          Create Habit
        </button>
      </form>
    </Modal>
  );
};

export default CreateHabit;
