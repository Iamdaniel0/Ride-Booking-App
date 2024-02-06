import React, { useState, useEffect } from 'react';
import Destination from './api/data/destination';
import styles from './bookings.module.css';
function SearchBr() {


  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const filtered = Destination.filter((item) =>
      item.address.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
    setNotFound(filtered.length === 0);
  }, [searchText]);

  const handleSearch = () => {
    console.log(`Searching for: ${searchText}`);
  };

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.oooo}>
      <div className={styles.yyy}>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {selectedDestination ? (
        <div className={styles.uuu}>
          <h4>Selected Destination</h4>
          {selectedDestination.address}
        </div>
      ) : null}
      <div className="list">
        {notFound ? (
          <div className="notfound">Not found</div>
        ) : (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="item"
              onClick={() => handleSelectDestination(item)}
            >
              {item.address}
            </div>
          ))
        )}
      </div>
      </div>

    </div>
  );
}

export default SearchBr;
