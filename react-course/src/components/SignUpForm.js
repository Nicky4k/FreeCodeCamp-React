import React, { useEffect, useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPwd: "",
    subscription: false,
  });
  const [userSignUps, setUserSignUps] = useState(
    () => JSON.parse(localStorage.getItem("signUpUsersData")) || []
  );

  useEffect(() => {
    localStorage.setItem("signUpUsersData", JSON.stringify(userSignUps));
  }, [userSignUps]);

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
    setUserSignUps([...userSignUps, formData]);
  }

  return (
    <>
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
      <div className="userDetails">
        {userSignUps && (
          <>
            <h4>Users:</h4>
            <br />
            {userSignUps.map((user) => (
              <p key={user.email}>{user.email}</p>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default SignUpForm;
