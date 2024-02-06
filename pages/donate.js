import React, { useState } from 'react';
import styles from './bookings.module.css'
import Data from './api/data/allUsers';
import data from './api/data/countryData';
import { useRouter } from 'next/router';

function UserSearch() {
  const router = useRouter();
  const {email} = router.query

  const [searchPlaceA, setSearchPlaceA] = useState('');
  const [searchPlaceB, setSearchPlaceB] = useState('');
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [places, setPlaces] = useState([
    "17s Kulas Light",
    "97s gift Light",
    '117 rumudara shop',
  
  ]);
  const [users, setUsers] = useState([
    { name: 'wisdom', age: 25 ,carNo:"NCH11SD",
    carType:"Default",
    carColour:"red" },
    { name: 'favor', age: 30 ,carNo:"RTY556U",
    carType:"Default",
    carColour:"blue" },
    { name: 'mark', age: 22 ,carNo:"WWE33RT",
    carType:"Default",
    carColour:"yellow" },
    
  ]);

  const [randomUser, setRandomUser] = useState(null);

  const handleSearchA = () => {
    const selected = [];

    if (searchPlaceA) {
      const placesMatchingA = places.filter(place =>
        place.toLowerCase().includes(searchPlaceA.toLowerCase())
      );
      selected.push(...placesMatchingA);
    }

    setSelectedPlaces(selected);
  };

  const handleSearchB = () => {
    const selected = [];

    if (searchPlaceB) {
      const placesMatchingB = places.filter(place =>
        place.toLowerCase().includes(searchPlaceB.toLowerCase())
      );
      selected.push(...placesMatchingB);
    }

    setSelectedPlaces(selected);
  };
  const handleRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    setRandomUser(users[randomIndex]);
  };



  return (
    <div className={styles.kol}>
      <h2 className={styles.uio}>welcome {Data[0].username} try booking a shif</h2>
      <h2 className={styles.uio}>welcome {email} try booking a shif</h2>
      <div className={styles.uuu}>
      <div className={styles.kk}>
        <input
          type="text"
          placeholder="Search Your location"
          value={searchPlaceA}
          onChange={(e) => setSearchPlaceA(e.target.value)}
        />
        <button onClick={handleSearchA}>Search Location</button>
      </div>
      <div className={styles.kk}>
        <input
          type="text"
          placeholder="Search Where to"
          value={searchPlaceB}
          onChange={(e) => setSearchPlaceB(e.target.value)}
        />
        <button onClick={handleSearchB}>Search Location</button>
      </div>
      </div>

      
      {selectedPlaces.length > 0 && (
        <div>
          <p>Selected Where to :</p>
          <ul>
            {selectedPlaces.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={handleRandomUser}>book</button>
      {randomUser && (
        <div>
          {/* <p>Random DriverInfo</p> */}
          <p>Name: {randomUser.name}</p>
          <p>Age: {randomUser.age}</p>
          <p>carNo: {randomUser.carNo}</p>
          <p>carType: {randomUser.carType}</p>
          <p>carColour: {randomUser.carColour}</p>
        </div>
        
      )}
    </div>
  );
}

export default UserSearch;
