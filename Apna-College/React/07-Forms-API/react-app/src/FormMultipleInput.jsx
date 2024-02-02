import { useState } from "react";

export default function FormMultipleInput() {
  
  let [formData, setFormData] = useState({
    stateVariableFullName: "",
    stateVariableUserName: ""
  });

  let handleInputChange = (event) => {

    setFormData((currentData) => {

        // let fieldName = event.target.name;
        // let newValue = event.target.value;

        return { ...currentData, [event.target.name]: event.target.value };
    });
  };

  let handleFormSubmit = (event) => {
    event.preventDefault();
    setFormData({
        stateVariableFullName: "",
        stateVariableUserName: ""
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>

        <label htmlFor="fullNameId">Full Name</label>
        <input
          type="text"
          placeholder="enter your full name"
          id="fullNameId"
          name="stateVariableFullName"
          value={formData.stateVariableFullName}
          onChange={handleInputChange}
        />

        <br /><br />

        <label htmlFor="userNameId">User Name</label>
        <input
          type="text"
          placeholder="enter your user name"
          id="userNameId"
          name="stateVariableUserName"
          value={formData.stateVariableUserName}
          onChange={handleInputChange}
        />

        <button>Submit</button>

      </form>
    </>
  );
}