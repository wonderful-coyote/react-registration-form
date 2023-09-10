import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: {
      value: "",
      isTouched: false,
    },
    role: "role",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const getIsFormValid = () => {
    // Implement this function
    return true;
  };

  const clearForm = () => {
    setFormData({ ...initialFormState });
  };

  const handleFirstNameChange = (e) => {
    setFormData({
      ...formData,
      firstName: e.target.value,
    });
  };

  const handleLastNameChange = (e) => {
    setFormData({
      ...formData,
      lastName: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setFormData({
      ...formData,
      password: {
        ...formData.password,
        value: e.target.value,
        isTouched: true,
      },
    });
  };

  const handleRoleChange = (e) => {
    setFormData({
      ...formData,
      role: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (getIsFormValid()) {
      alert("Account created!");
      clearForm();
    } else {
      alert("Form is not valid. Please check the fields.");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              placeholder="Password"
              value={formData.password.value}
              onChange={handlePasswordChange}
            />
            {formData.password.isTouched && formData.password.value.length < 8 && (
              <PasswordErrorMessage />
            )}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={formData.role} onChange={handleRoleChange}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
