import React from "react"
import { Line } from "react-chartjs-2"

const Speed = ({ runsOrdered, changePage }) => {
  //Make an array of the times and distances ran to create an array of average mile times
  const timeData = runsOrdered.map(
    (run) => run.lengthnumber / run.distancenumber
  )
  const dates = runsOrdered.map((run) => run.date)
  //Reverses the array
  const reversedTimeData = timeData.reverse()
  const reversedDates = dates.reverse()

  const data = {
    labels: reversedDates.slice(-7),
    datasets: [
      {
        label: "Average Mile (mins)",
        data: reversedTimeData.slice(-7),
        fill: true,
        backgroundColor: "#b20a08",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  }

  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  }

  return (
    <div className="main-right-top-container">
      <div className="right-top-container">
        <div className="options right-top-options">
          <p
            onClick={() => changePage("Distance")}
            style={{ borderRadius: "50px 0 0 50px" }}
          >
            Distance
          </p>
          <p onClick={() => changePage("Calories")}>Calories</p>
          <p
            onClick={() => changePage("Speed")}
            style={{
              borderRadius: "0 50px 50px 0",
              backgroundColor: "#ababaa",
            }}
          >
            Speed
          </p>
        </div>
        <div className="top-right-graph">
          <Line className="graph" data={data} options={options} />
        </div>
      </div>
    </div>
  )
}

export default Speed
