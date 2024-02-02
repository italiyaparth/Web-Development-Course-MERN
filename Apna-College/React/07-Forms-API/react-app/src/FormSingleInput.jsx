import { useState } from "react";

export default function FormSingleInput() {
  
  let [fullName, setFullName] = useState("aaa");

  let handleNameChange = (event) => {
    setFullName(event.target.value); // we didin't use callback, because new value doesn't depends on old value
  };

  return (
    <>
      <form>
        <label htmlFor="fullNameId">Full Name</label>
        <input
          type="text"
          placeholder="enter your full name"
          id="fullNameId"
          value={fullName}
          onChange={handleNameChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
