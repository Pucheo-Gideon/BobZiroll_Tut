import React from "react";
import "./Data.css"

export const DataForm = () => {

    const [formData, setFormData] = React.useState({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            joinNewsletter: false,
    })

    const handleChange = (event) => {

        const {name, value, type, checked} = event.target

        setFormData(prevData =>  ({
            ...prevData,
            [name]: type === "checkbox"? checked:value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)

        if(formData.password === formData.confirmPassword){
            if(formData.joinNewsletter === true){
                console.log("Successfully Signed up!")
            }
            console.log("Thanks for signing up for our newsletter")
        }else{
            console.log("Sorry. Passwords don't match! Enter Correct Passwords")
        }
    }

    return (
      <div className="form-container">
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Name"
          />
          <br />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="email@"
          />
          <br />
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Password"
          />
          <br />
          <input
            type="text"
            name="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword}
            placeholder="Confirm Password"
          />
          <br />
          <div className="check">
            <input
              type="checkbox"
              name="joinNewsletter"
              onChange={handleChange}
              checked={formData.joinNewsletter}
              id="newsletter"
            />
            <label htmlFor="newsletter">I want to join the newsletter</label>
          </div>
          <br />
          <button>Sign up</button>
        </form>
      </div>
    );
}