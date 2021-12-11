import React from "react"
import { Doughnut } from "react-chartjs-2"

const Calories = ({ openNewGoal, goals, changePage, newDistance }) => {
  const data = {
    labels: ["Complete", "Goal"],
    datasets: [
      {
        label: "My First Dataset",
        data: [
          newDistance * 100,
          goals[0].calories === 0 ? 0 : goals[0].calories - newDistance * 100,
        ],
        backgroundColor: ["#b20a08", "#070707"],
        hoverOffset: 4,
      },
    ],
  }

  return (
    <div className="leftContentBottom-container">
      <div className="nav-container">
        <nav className="options">
          <p
            style={{ borderRadius: "50px 0 0 50px" }}
            onClick={() => changePage("Distance")}
          >
            Distance
          </p>
          <p
            style={{ backgroundColor: "#ababaa" }}
            onClick={() => changePage("Calories")}
          >
            Calories
          </p>
          <p
            style={{ borderRadius: "0 50px 50px 0" }}
            onClick={() => changePage("Speed")}
          >
            Speed
          </p>
        </nav>
        <div className="new-container">
          <p className="new" onClick={openNewGoal}>
            New Goal
          </p>
        </div>
      </div>
      <div className="bottom-left-content">
        <div className="graph">
          <Doughnut data={data} />
        </div>
        <div className="details">
          <p>
            <strong>Progress</strong> -{" "}
            {newDistance ? newDistance * 100 : Number(0)} Cals
          </p>
          <p>
            <strong>Goal</strong> - {goals[0].calories} Cals
          </p>
          <p>
            <strong>Complete</strong> -{" "}
            {(goals[0].calories === 0
              ? 0
              : ((newDistance * 100) / goals[0].calories) * 100
            ).toFixed(2)}
            %
          </p>
        </div>
      </div>
    </div>
  )
}

export default Calories
