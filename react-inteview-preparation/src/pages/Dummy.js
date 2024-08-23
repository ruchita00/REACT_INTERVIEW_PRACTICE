import React, { useState } from "react";

const Dummy = () => {
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState({});

  const handleInputField = (e) => {
    const { value, type, name, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormInput({ ...formInput, [name]: val });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErr = handleValidation(formInput);
    if (Object.keys(validateErr).length === 0) {
      setSubmitted(formInput);
    } else {
      setErrors(validateErr);
    }
  };
  const handleValidation = (formInput) => {
    let error = {};
    if (!formInput.firstName.trim() === "") {
      error.firstName = "firstName is required";
    }
    if (!formInput.lastName.trim() === "") {
      error.lastName = "lastName is required";
    }
    if (!formInput.email.trim() === "") {
      error.email = "email is required";
    }
    if (!formInput.password.trim() === "") {
      error.password = "password is required";
    }
    if (!formInput.phoneNumber.trim() === "") {
      error.phoneNumber = "phoneNumber is required";
    }
    return error;
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>firstName</label>
          <input
            type="text"
            value={formInput.firstName}
            onChange={handleInputField}
            placeholder="firstName"
            name="firstName"
          />
        </div>
        <div>
          <label>lastName</label>
          <input
            type="text"
            value={formInput.lastName}
            onChange={handleInputField}
            placeholder="lastName"
            name="lastName"
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="email"
            value={formInput.email}
            onChange={handleInputField}
            placeholder="email"
            name="email"
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            value={formInput.password}
            onChange={handleInputField}
            placeholder="password"
            name="password"
          />
        </div>
        <div>
          <label>phoneNumber</label>
          <input
            type="number"
            value={formInput.phoneNumber}
            onChange={handleInputField}
            placeholder="phoneNumber"
            name="phoneNumber"
          />
        </div>
        <div>
          <label>agree</label>
          <input
            type="checkbox"
            value={formInput.agree}
            onChange={handleInputField}
            name="agree"
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
      {submitted && (
        <table>
          <thead>
            <tr>
              <th>field</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(submitted).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dummy;
