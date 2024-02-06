import React, { useState } from 'react';
import styles from './bookings.module.css';

function UserSearch() {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([
    'User 1',
    'User 2',
    'User 3',
    'User 4',
    'User 5',
  ]);
  const [randomUser, setRandomUser] = useState(null);

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      // Filter users based on searchText
      const filteredUsers = users.filter(user =>
        user.toLowerCase().includes(searchText.toLowerCase())
      );
      if (filteredUsers.length > 0) {
        // Pick a random user from the filtered list
        const randomIndex = Math.floor(Math.random() * filteredUsers.length);
        setRandomUser(filteredUsers[randomIndex]);
      } else {
        setRandomUser(null);
      }
    }
  };

  return (
    <div className={styles.mm}>
      <input
        type="text"
        placeholder="Search for a user..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {randomUser && <p>Random User: {randomUser}</p>}
    </div>
  );
}

export default UserSearch;
