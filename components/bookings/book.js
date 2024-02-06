import React, { useState, useEffect } from 'react';
import DriverInfo from '@/pages/api/data/driverInfo';
function App() {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    DriverInfo

    fetch('/path/to/people.json')
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const getRandomPerson = () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    setSelectedPerson(people[randomIndex]);
  };

  return (
    <div>
      <button onClick={getRandomPerson}>Show Random Person</button>
      {selectedPerson && (
        <div>
          <h2>Name: {selectedPerson.name}</h2>
          <p>Age: {selectedPerson.age}</p>
          <p>City: {selectedPerson.city}</p>
        </div>
      )}
    </div>
  );
}

export default App;
