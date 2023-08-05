import React from "react";
import "./Forms.css"
export const FormsII = () =>{

    const [formData, setFormData] = React.useState({

        firstName: "",
        lastName: "",
        phoneNo: "",
        isBath: false,
        fruit: "",
        color: ""

    })

    console.log(formData.fruit)
    console.log(formData.color)

    const handleChange = (event) => {
        console.log(event.target)
        const {name, type, checked, value} = event.target
        setFormData(prevState => {
            return{
                ...prevState,
                [name]: type==="checkbox"? checked: value,
                // isBath: !prevState.isBath
           
            }
        })
    }

    const handleSubmit = (event)=> {
        event.preventDefault()
        console.log(formData)
    }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            id="firstName"
          />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            id="lastName"
          />
          <br />
          <label htmlFor="phoneNo">phone No:</label>
          <input
            type="number"
            name="phoneNo"
            onChange={handleChange}
            value={formData.phoneNo}
            id="phoneNo"
          />
          <br />
          <div id="isBaths">
            <label htmlFor="isBath">Have You had your Bath?:</label>
            <input
              type="checkbox"
              name="isBath"
              onChange={handleChange}
              checked={formData.isBath}
              id="isBath"
            />
          </div>

          <br />
          <label htmlFor="fruit">Select Fruit</label>
          <select
            value={formData.fruit}
            id="fruit"
            name="fruit"
            onChange={handleChange}
          >
            <option value="">--- Choose ---</option>
            <option value="Grape">Grape</option>
            <option value="Pineapple">Pineapple</option>
            <option value="Star Apple">Star Apple</option>
          </select>
          <br />

          <div id="pickColor">
            Pick Color:
            <label htmlFor="red">Red</label>
            <input
              type="radio"
              name="color"
              checked={formData.color === "Red"}
              id="red"
              onChange={handleChange}
              value="Red"
            />
            <label htmlFor="grey"> Grey </label>
            <input
              type="radio"
              name="color"
              checked={formData.color === "Grey"}
              id="grey"
              onChange={handleChange}
              value="Grey"
            />
            <label htmlFor="Orange">Orange</label>
            <input
              type="radio"
              name="color"
              id="Orange"
              checked={formData.color === "Orange"}
              onChange={handleChange}
              value="Orange"
            />
          </div>

          <button>Submit</button>
        </form>
      </>
    );
}