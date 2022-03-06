import React, { useState } from "react";
import Clock from "../../components/Clock/Clock";
import {
  CircularProgressbarWithChildren,
  buildStyles,
  CircularProgressbar,
} from "react-circular-progressbar";
import "./style.css";
const Pomodoro = () => {
  const [percentage, setPercentage] = useState(0);

  const pomodoroTimerHandler = () => {
    const currentTime = new Date().toLocaleTimeString().split(":");
    const currentTimeMin = new Date().getTime();

    let hours = parseInt(currentTime[0]);
    let minutes = parseInt(currentTime[1]);
    let seconds = parseInt(currentTime[2]);
    console.log(minutes);
    let cooldownTime;
    const time = new Date().toDateString();

    if (minutes + 25 > 60) {
      hours = hours + 1;
      minutes = minutes + 25 - 60;
    } else {
      minutes = minutes + 25;
    }
    if (seconds + 25 > 60) {
      seconds = seconds + 25 - 60;
      minutes = minutes + 1;
    } else {
      seconds = seconds + 25;
    }
    if (hours === 24) {
      hours = 0;
    }

    cooldownTime = new Date(`${time} ${hours}:${minutes}:${seconds}`).getTime();

    setInterval(() => {
      const range = cooldownTime - currentTimeMin;
      const cur = new Date().getTime();
      const totalTime = cooldownTime - currentTimeMin;
      const timeLeft = cooldownTime - cur;
      const progress = cur - currentTimeMin;
      const percentage = 100 - (timeLeft / totalTime) * 100;
      console.log(percentage);
      setPercentage(percentage.toFixed(1));
      if (timeLeft < 0) {
      }
    }, 1000);
  };

  return (
    <div className="flex justify-center flex-col gap-14 items-center w-5/6 h-full">
      <CircularProgressbarWithChildren
        value={percentage}
        className="circular-loader"
        strokeWidth={3.5}
        styles={buildStyles({
          strokeLinecap: "butt",
          pathColor: `rgba(49, 13, 59)`,
          trailColor: `rgba(49, 13, 59,.5)`,
        })}
      >
        <Clock percentage={percentage} />
      </CircularProgressbarWithChildren>
      <button
        className="bg-[#431b4b] rounded-lg hover:bg-[#70367C] transition-colors text-white py-4 px-10"
        onClick={pomodoroTimerHandler}
      >
        Start Pomodoro
      </button>
    </div>
  );
};

export default Pomodoro;
