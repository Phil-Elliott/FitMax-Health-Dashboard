import React, { useState, useEffect } from "react"

const AddNewRun = ({ closeNewRun, addRun }) => {
  const [distancenumber, setDistancenumber] = useState("")
  const [lengthnumber, setLengthnumber] = useState("")
  const [date, setDate] = useState("")

  //Pushes the data after submitting and changes back to other content
  const onSubmit = (e) => {
    e.preventDefault()

    if (!distancenumber) {
      alert("Please add distance")
      return
    }
    addRun({ distancenumber, lengthnumber, date })
    closeNewRun()
  }

  return (
    <div className="leftContentTop-container" onSubmit={onSubmit}>
      <div>
        <h1 style={{ margin: "0" }}>Add</h1>
        <div className="close-container">
          <p className="close" onClick={closeNewRun}>
            Close
          </p>
        </div>
      </div>
      <form>
        <div className="form-control">
          <label>
            <strong>Date</strong>
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>
            <strong>Distance (Miles)</strong>
          </label>
          <input
            type="number"
            step="any"
            placeholder="How far did you run?"
            value={distancenumber}
            onChange={(e) => setDistancenumber(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>
            <strong>Length (Mins)</strong>
          </label>
          <input
            type="number"
            step="any"
            placeholder="How long was your run?"
            value={lengthnumber}
            onChange={(e) => setLengthnumber(e.target.value)}
          />
        </div>
        <input type="submit" value="Save" className="btn btn-block" />
      </form>
    </div>
  )
}

export default AddNewRun
