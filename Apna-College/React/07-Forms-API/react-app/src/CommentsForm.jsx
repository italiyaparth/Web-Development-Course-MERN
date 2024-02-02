import { useState } from "react";

export default function CommentsForm() {
  
  let [formData, setFormData] = useState({
    stateVariableUserName: "",
    stateVariableRemark: "",
    stateVariableRating: 5
  });

  let handleInputChange = (event) => {

    setFormData((currentData) => {

        return { ...currentData, [event.target.name]: event.target.value };
    });
  };

  let handleFormSubmit = (event) => {
    event.preventDefault();
    setFormData({
        stateVariableUserName: "",
        stateVariableRemark: "",
        stateVariableRating: 5
    });
  };

  return (
    <div>

        <h4>Give a Comment!</h4>

      <form onSubmit={handleFormSubmit}>

        <label htmlFor="userNameId">User Name</label>
        <input
          type="text"
          placeholder="enter your user name"
          id="userNameId"
          name="stateVariableUserName"
          value={formData.stateVariableUserName}
          onChange={handleInputChange}
        />
        <br /><br />

        <label htmlFor="remarkId">Remark</label>
        <textarea
          type="text"
          placeholder="enter remark"
          id="remarkId"
          name="stateVariableRemark"
          value={formData.stateVariableRemark}
          onChange={handleInputChange}
        />
        <br /><br />

        <label htmlFor="ratingId">Rating</label>
        <input
          type="range"
          min={1}
          max={5}
          id="ratingId"
          name="stateVariableRating"
          value={formData.stateVariableRating}
          onChange={handleInputChange}
        />
        <br /><br />

        <button>Add Comment</button>

      </form>
    </div>
  );
}