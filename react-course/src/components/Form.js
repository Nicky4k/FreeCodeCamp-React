import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    bio: "",
    nri: true,
    citizenship: "",
    planet: "",
  });

  function setFormHandler(e) {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    for (const key in formData) {
      if (!formData[key]) {
        console.log("please fill:", key);
      }
    }
  }

  return (
    <form className="form__container" onSubmit={formSubmitHandler}>
      <input
        type="text"
        className="inputBoxes"
        placeholder="First Name"
        onChange={setFormHandler}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        className="inputBoxes"
        placeholder="Last Name"
        onChange={setFormHandler}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="text"
        className="inputBoxes"
        placeholder="Country"
        onChange={setFormHandler}
        name="country"
        value={formData.country}
      />
      <textarea
        name="bio"
        placeholder="<textarea /> is resizable"
        onChange={setFormHandler}
        className="inputBoxes"
        value={formData.bio}
      />
      <label htmlFor="nri">
        NRI
        <input
          type="checkbox"
          name="nri"
          id="nri"
          checked={formData.nri}
          onChange={setFormHandler}
        />
      </label>
      <br />
      <fieldset className="fieldSet">
        <legend>Current citizenship</legend>
        <label htmlFor="usa">
          <input
            type="radio"
            name="citizenship"
            id="usa"
            value="usa"
            checked={formData.citizenship === "usa"}
            onChange={setFormHandler}
          />
          USA
        </label>
        <label htmlFor="india">
          <input
            type="radio"
            name="citizenship"
            id="india"
            value="india"
            checked={formData.citizenship === "india"}
            onChange={setFormHandler}
          />
          India
        </label>
        <label htmlFor="newZeland">
          <input
            type="radio"
            name="citizenship"
            id="newZeland"
            value="newZeland"
            checked={formData.citizenship === "newZeland"}
            onChange={setFormHandler}
          />
          New Zeland
        </label>
      </fieldset>
      <label className="planets__label" htmlFor="planet">
        Your favourite planet?
      </label>
      <select
        value={formData.planet}
        onChange={setFormHandler}
        name="planet"
        id="planet"
      >
        <option value="choose">-- Choose --</option>
        <option value="mars">Mars</option>
        <option value="jupiter">Jupiter</option>
        <option value="saturn">Saturn</option>
        <option value="uranus">Uranus</option>
      </select>
      <br />
      <button>Submit</button>
    </form>
  );
};

export default Form;
