
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../api/apiSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name }));
    setName("");
  };

  return (
    <div>
      <h2>crud app</h2>
      <form onSubmit={handleSubmit}>
      
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
        required
      />
      <button type="submit">Add User</button>
    </form>
    </div>
  );
};

export default AddUser;
