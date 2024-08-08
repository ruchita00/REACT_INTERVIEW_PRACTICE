import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState({});

  const handleInputFields = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    const validateError = Validation(formData);
    if (Object.keys(validateError).length === 0) {
      setSubmitted(formData);
    } else {
      setErrors(validateError);
    }
  };
  const Validation = (formData) => {
    let error = {};
    if (!formData.firstName.trim() === "") {
      error.firstName = "firstname is required";
    }
    if (!formData.lastName.trim() === "") {
      error.lastName = "lastName is required";
    }
    if (!formData.email.trim() === "") {
      error.email = "email is required";
    }
    if (!formData.password.trim() === "") {
      error.password = "password is required";
    }
    if (!formData.phoneNumber.trim() === "") {
      error.phoneNumber = "phoneNumber is required";
    }
    return error;
  };
  return (
    <div>
      <form onSubmit={onSubmitData}>
        <div>
          <label>
            firstName:
            <input
              type="text"
              value={formData.firstName}
              onChange={handleInputFields}
              name="firstName"
            />
          </label>
        </div>
        <div>
          <label>
            lastName:
            <input
              type="text"
              value={formData.lastName}
              onChange={handleInputFields}
              name="lastName"
            />
          </label>
        </div>
        <div>
          <label>
            email:
            <input
              type="email"
              value={formData.email}
              onChange={handleInputFields}
              name="email"
            />
          </label>
        </div>
        <div>
          <label>
            password:
            <input
              type="password"
              value={formData.password}
              onChange={handleInputFields}
              name="password"
            />
          </label>
        </div>
        <div>
          <label>
            phoneNumber:
            <input
              type="number"
              value={formData.phoneNumber}
              onChange={handleInputFields}
              name="phoneNumber"
            />
          </label>
        </div>
        <div>
          <label>
            agree:
            <input
              type="checkbox"
              value={formData.agree}
              onChange={handleInputFields}
              name="agree"
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {submitted && (
        <table>
          <thead>
            <tr>
              <th>Filed</th>
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

export default Form;
