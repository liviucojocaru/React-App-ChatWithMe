import React, { useState } from 'react';

function HomePage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission goes here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => {
              const value = e.target.value;
              if (!isNaN(value) && value >= 18 && value <= 99) {
                setAge(value);
              }
            }}
          />
        </label>
        <br />
        <label>
          Sex:
          <br />
          <input
            type="radio"
            name="sex"
            value="male"
            checked={sex === 'male'}
            onChange={(e) => setSex(e.target.value)}
          />{' '}
          Male
          <br />
          <input
            type="radio"
            name="sex"
            value="female"
            checked={sex === 'female'}
            onChange={(e) => setSex(e.target.value)}
          />{' '}
          Female
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
