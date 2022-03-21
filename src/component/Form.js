import React from "react";
import { useState } from "react";
import axios from "axios";

const Form = ({ onSubmitNow }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`https://api.github.com/users/${username}`).then((response) => {
      onSubmitNow(response.data);
    });

    setUsername("");
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
       <h2 className="heading">GithubProfileFinder.com</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          <p>Enter Github Username:</p>
          <div>
            <input
              type="text"
              value={username}
              placeholder="Github Username"
              onChange={handleChange}
              required
            />
            <button type="submit">Search</button>
          </div>
        </label>
      </form>
    </div>
  );
};

export default Form;
