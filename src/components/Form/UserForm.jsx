import React from "react";
import { useState } from "react";

const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email });

    setName("");
    setMail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          id="name"
          type="text"
          className="form-control my-3"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="mail"> Email</label>
        <input
          value={email}
          id="mail"
          type="text"
          className="form-control my-3"
          onChange={(e) => setMail(e.target.value)}
        />
      </div>

      <button className="btn btn-primary">Add User</button>
    </form>
  );
};

export default UserForm;
