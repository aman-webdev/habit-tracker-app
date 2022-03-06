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
        <div className=" my-10 mx-auto relative  z-0 mb-6 w-1/2 group ">
          <input
            type="text"
            name="habitName"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            autoComplete="off"
            value={habitData.habitName}
            onChange={onChangeHandler}
          />
          <label
            for="habitName"
            class="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:accent-[#8d2ba5] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Habit Name
          </label>
        </div>
        <div className=" my-10 mx-auto relative  z-0 mb-6 w-1/2 group ">
          <input
            type="text"
            name="habitDescription"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            autoComplete="off"
            value={habitData.habitDescription}
            onChange={onChangeHandler}
          />
          <label
            for="habitName"
            class="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:accent-[#8d2ba5] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Habit Description
          </label>
        </div>
        <div className="w-1/2 my-12 mx-auto">
          <div className="w-full flex">
            <div className="text-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 accent-[#8d2ba5]"
                onChange={onFrequencyChangeHandler}
                id="sunday"
                name="0"
                value="sunday"
              />
              <label for="sunday" className="text-sm">
                Sun
              </label>
            </div>
            <div className="text-center">
              <input
                type="checkbox"
                onChange={onFrequencyChangeHandler}
                className="form-checkbox h-5 w-5 accent-[#8d2ba5]"
                id="monday"
                name="1"
                value="monday"
              />
              <label for="monday" className="text-sm">
                Mon
              </label>
            </div>
            <div className="text-center">
              <input
                type="checkbox"
                onChange={onFrequencyChangeHandler}
                className="form-checkbox h-5 w-5 accent-[#8d2ba5]"
                id="tuesday"
                name="2"
                value="tuesday"
              />
              <label for="tuesday" className="text-sm">
                Tue
              </label>
            </div>
            <div className="text-center">
              <input
                type="checkbox"
                onChange={onFrequencyChangeHandler}
                className="form-checkbox h-5 w-5 accent-[#8d2ba5]"
                id="wednesday"
                name="3"
                value="wednesday"
              />
              <label for="wednesday" className="text-sm">
                Wed
              </label>
            </div>
            <div className="text-center">
              <input
                type="checkbox"
                onChange={onFrequencyChangeHandler}
                id="thursday"
                className="form-checkbox h-5 w-5 accent-[#8d2ba5]"
                name="4"
                value="thursday"
              />
              <label for="thursday" className="text-sm">
                Thur
              </label>
            </div>
            <div className="text-center">
              <input
                type="checkbox"
                onChange={onFrequencyChangeHandler}
                className="form-checkbox h-5 w-5 accent-[#8d2ba5]"
                id="friday"
                name="5"
                value="friday"
              />
              <label for="friday" className="text-sm">
                Fri
              </label>
            </div>
            <div className="text-center">
              <input
                type="checkbox"
                onChange={onFrequencyChangeHandler}
                className="form-checkbox h-5 w-5 accent-[#8d2ba5]  px-6"
                id="saturday"
                name="6"
                value="saturday"
              />
              <label for="saturday" className="text-sm">
                Sat
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mx-auto block  bg-[#7e2d92] text-white py-3 px-8 rounded-md "
        >
          Create Habit
        </button>
      </form>
    </Modal>
  );
};

export default CreateHabit;
