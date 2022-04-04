import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import HabitPercentage from "../components/HabitPercentage/HabitPercentage";
import { ReactComponent as AnalyticsIllustration } from "../assets/analytics-illustration.svg";
import caluclateHabitPercentage from "../utils/completedHabitPercentage";
import { useSelector, useDispatch } from "react-redux";
import { getHabits } from "../actions/habits";
import randomColor from "randomcolor";
import "./Analytics.css";
import Graph from "../components/Graph/Graph";
import PuffLoader from "react-spinners/PuffLoader";

const Analytics = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const [completedHabits, setCompletedHabits] = useState([]);
  const [isGraphOpen, setIsGraphOpen] = useState(false);
  const { habits } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getHabits(setIsLoading));
  }, []);

  useEffect(() => {
    setCompletedHabits(
      habits.map((habit) => {
        const comp = caluclateHabitPercentage(habit.dates);
        return {
          name: habit.habitName,
          percentage: parseFloat(comp / habit.dates.length).toFixed(2) * 100,
          completed: comp,
          graphColor: randomColor({ hue: "purple", luminosity: "bright" }),
        };
      })
    );
  }, [habits]);

  return (
    <div className="w-5/6 px-8">
      <Header setIsGraphOpen={setIsGraphOpen} isGraphOpen={isGraphOpen} />

      {isLoading ? (
        <div className="w-full h-5/6 flex justify-center items-center">
          <PuffLoader
            size={200}
            loading={isLoading}
            color="#70367C"
            css={{ strokeWidth: "40px" }}
          />
        </div>
      ) : (
        <div
          className={`mt-10  progress-main-container ${
            completedHabits.length ? "grid" : "block"
          }`}
        >
          {completedHabits.length ? (
            completedHabits.map((habit, index) => (
              <HabitPercentage habit={habit} index={index} />
            ))
          ) : (
            <div className="w-full text-center">
              <AnalyticsIllustration className="mx-auto" />
              <Link to="/habit">
                <p className="mt-6 hover:opacity-80 transition-opacity text-[#652675] text-md">
                  Add Habits to get Started
                </p>
              </Link>
            </div>
          )}
        </div>
      )}
      <Graph
        UserData={completedHabits}
        setIsGraphOpen={setIsGraphOpen}
        isGraphOpen={isGraphOpen}
      />
    </div>
  );
};

export default Analytics;
