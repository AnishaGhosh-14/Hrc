import React, { useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [response, setResponse] = useState('');
  const [id, setId] = useState('');

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/DeleteServlet?id=${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        console.log('Invoice deleted successfully');
      } else {
        console.error('Failed to delete invoice');
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input type="text" value={id} onChange={handleInputChange} />
      <button onClick={handleDelete}>Delete</button>
      <p>{response}</p>
    </div>
  );
};

export default MyComponent;
