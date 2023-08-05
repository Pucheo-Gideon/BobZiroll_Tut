import React from "react";

export default function Forms() {
  const [formData, setFormData] = React.useState({
    firsName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true
  });

  console.log(formData)
//   console.log(formData.lastName);

  const handleChange = (event) => {
    const {name, value, check, type} = event.target
    setFormData(prevFormData => ({
        ...prevFormData, [name]: type==="checkbox"? check: value}));
  };

  return (
    <>
      <form type="submit">
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            autoFocus={true}
            value={formData.firsName}
          />
        </label>
        <br />
        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            autoFocus={true}
            value={formData.lastName}
          />
        </label>
        <br/>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            onChange={handleChange}
            autoFocus={true}
            value={formData.email}
          />
        </label>
        <br/>
        <textarea name="comment" placeholder="write your comment here" onChange={handleChange}value={formData.comment} />
        <br/>
     <input 
        id="isFriendly"
        type="checkbox"
        name="isFriendly"
        onChange={handleChange}
        checked={formData.isFriendly}
     />
     <label htmlFor="isFriendly">Are you friendly?</label>
      </form>
    </>
  );
}
