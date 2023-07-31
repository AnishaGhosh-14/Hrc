// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FetchData = ({ setData }) => {
//   useEffect(() => {
//     axios
//       .get('http://localhost:8080/Mile_Stone_3/dataLoading')
//       .then((response) => {
//         const formattedData = response.data.map((row, index) => ({
//           ...row,
//           id: index + 1,
//         }));
//         setData(formattedData);
//       })
//       .catch((error) => console.error(error));
//   }, [setData]);

//   return null;
// };

// export default FetchData;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData = ({ setData }) => {
  useEffect(() => {
    axios
      .get('http://localhost:8080/Mile_Stone_3/dataLoading')
      .then((response) => {
        const formattedData = response.data.map((row, index) => ({
          ...row,
          id: index + 1,
        }));
        setData(formattedData);
      })
      .catch((error) => console.error(error));
  }, [setData]);

  return null;
};

export default FetchData;
