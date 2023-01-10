import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPwd: "",
    subscription: false,
  });

  function formChangeHandler(e) {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "subscription" ? checked : value,
    });
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.confirmPwd) return;
    if (formData.password !== formData.confirmPwd) return;
    if (!formData.subscription) return;
    console.log("sign up");
  }

  return (
    <form className="formContainer" onSubmit={formSubmitHandler}>
      <input
        value={formData.email}
        className="input__box"
        type="email"
        name="email"
        id="email"
        placeholder="email"
        onChange={formChangeHandler}
      />
      <input
        value={formData.password}
        className="input__box"
        type="password"
        name="password"
        id="passowrd"
        placeholder="password"
        onChange={formChangeHandler}
      />
      <input
        value={formData.confirmPwd}
        className="input__box"
        type="password"
        name="confirmPwd"
        id="confirmPwd"
        placeholder="confirm password"
        onChange={formChangeHandler}
      />

      <div className="checkbox__container">
        <input
          value={formData.subscription}
          type="checkbox"
          name="subscription"
          id="subscription"
          onChange={formChangeHandler}
        />
        <label htmlFor="subscription">I want to join newsletter</label>
      </div>
      <button className="signUp__btn">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
