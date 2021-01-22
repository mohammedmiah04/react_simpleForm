import React, { useState } from "react";
// JS


const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };

  return (
    <article>
      <form className="form">
        <div className="form-control">
          <label htmlFor="firstName">Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={person.age}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {people.map((person, index) => {
        const { firstName, id, email, age } = person;
        return (
          <div className="item" key={id}>
            <h4>FirstName: {firstName}</h4>
            <h4>Email: {email}</h4>
            <h4>Age: {age}</h4>
          </div>
        );
      })}
    </article>
  );
};

export default ControlledInputs;

