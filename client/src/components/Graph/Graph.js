import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Modal from "react-modal";
const Graph = ({ UserData, setIsGraphOpen, isGraphOpen }) => {
  console.log(UserData);
  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: { size: 14 },
        },
      },
    },
  };
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData({
      labels: UserData.map((data) => data.name),
      datasets: [
        {
          labels: "Users gained",
          data: UserData.map((data) => data.completed),
          backgroundColor: UserData.map((data) => data.graphColor),
          borderColor: "#fff",
          borderWidth: 3,
          hoverOffset: 10,
        },
      ],
    });
  }, [UserData]);

  const closeModal = () => {
    setIsGraphOpen(!isGraphOpen);
  };

  const customStyles = {
    content: {
      width: "60%",
      margin: "auto",
      display: "flex",
      flexDirection: "column",

      // justifyContent: "center",
      alignItems: "center",
    },
  };

  Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,.5)";

  return (
    <div className="modal-graph-container">
      <Modal
        onRequestClose={closeModal}
        isOpen={isGraphOpen}
        style={customStyles}
      >
        <p className="mb-6 text-lg text-[#652675] font-md">
          Your Habits by Graph
        </p>
        <div className="w-2/3 relative mb-2">
          {UserData.length ? <Pie options={options} data={userData} /> : null}
        </div>
      </Modal>
    </div>
  );
};

export default Graph;
