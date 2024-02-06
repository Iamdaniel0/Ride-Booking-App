import React from 'react';

function MyComponent() {
  // Sample array of objects
  const data = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
  ];

  // Function to find an object by id
  const findObjectById = (idToFind) => {
    const foundObject = data.find((item) => item.id === idToFind);

    if (foundObject) {
      // Do something with the found object
      console.log('Found object:', foundObject);
    } else {
      console.log('Object not found');
    }
  };

  // Example: Find an object with id 3
  findObjectById(3);

  return (
    <div>
      {/* Your React component JSX */}
    </div>
  );
}

export default MyComponent;
