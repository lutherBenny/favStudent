import React, { useState } from 'react';

const App = () => {
  const initialStudents = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    {id:4,name:"Luther Benny"}
  ];

  const [favouriteStudents, setFavouriteStudents] = useState([]);

  const addFavourite = (student) => {
    setFavouriteStudents([...favouriteStudents, student]);
  };

  const removeFavourite = (student) => {
    setFavouriteStudents(favouriteStudents.filter(s => s.id !== student.id));
  };

  const buttonStyle = {
    borderRadius: '5px',
    marginLeft: '10px',
    padding: '5px 10px',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {initialStudents.map(student => (
          <li key={student.id} style={{ marginBottom: '10px' }}>
            <span>{student.name}</span>
            {favouriteStudents.some(s => s.id === student.id) ? (
              <button 
                onClick={() => removeFavourite(student)}
                style={{ ...buttonStyle, backgroundColor: 'red', color: 'white' }}
              >
                Add to Favourite
              </button>
            ) : (
              <button 
                onClick={() => addFavourite(student)}
                disabled={favouriteStudents.some(s => s.id === student.id)}
                style={{ ...buttonStyle, backgroundColor: 'black', color: 'white' }}
              >
                Add to Favourite
              </button>
            )}
          </li>
        ))}
      </ul>

      <h1>Favourite Students</h1>
      <ul>
        {favouriteStudents.map(student => (
          <li key={student.id} style={{ marginBottom: '10px' }}>
            <span>{student.name}</span>
            <button 
              onClick={() => removeFavourite(student)}
              style={{ ...buttonStyle, backgroundColor: 'red', color: 'white' }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
