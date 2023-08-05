import React from "react";

export default function Form_I(){


    const [FormState, setFormState] = React.useState({
        firstName: "",
        phone: "",
        isQuestion: false,
        selectColor: "",
        employment: ''
    })

    console.log(FormState)
    const handleChange = (event) => {

        const {name, value, type, checked} = event.target
        console.log(event.target)
        setFormState(prevState=> ({...prevState, [name]: type==="checkbox"? checked: value}))
    }

    return (
      <div>
        <label>
          {" "}
          First Name:
          <input
            type="text"
            onChange={handleChange}
            name="firstName"
            value={FormState.firstName}
          />
        </label>
        <br />
        <label>
          {" "}
          Phone:
          <input
            type="number"
            onChange={handleChange}
            name="phone"
            value={FormState.phone}
          />
        </label>
        <br />
        <label htmlFor="question">Are you Friendly</label>
        <input
          type="checkbox"
          id="question"
          name="isQuestion"
          onChange={handleChange}
          checked={FormState.isQuestion}
        />
        <br />
        <label htmlFor="select">
          Please select your color:
          <select
            id="select"
            value={FormState.selectColor}
            name="selectColor"
            onChange={handleChange}
          >
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Grey">Grey</option>
          </select>
        </label>
        <br />
        <fieldset>
          <legend>Current Employment Status</legend>

          <label htmlFor="unemployed"> Unemployed </label>
          <input
            id="unemployed"
            type="radio"
            name="employment"
            value="unemployed"
            onChange={handleChange}
          />

          <label htmlFor="part_time">Part Time </label>
          <input
            id="part_time"
            type="radio"
            name="employment"
            value="part time"
            onChange={handleChange}
          />

          <label htmlFor="full_time">Full Time</label>
          <input
            id="full_time"
            type="radio"
            name="employment"
            value="full time"
            onChange={handleChange}
          />
        </fieldset>
      </div>
    );
}