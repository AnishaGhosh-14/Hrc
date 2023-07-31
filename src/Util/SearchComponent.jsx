

// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';


// const SearchComponent = ({ searchData, setinvisible, invisible , setFilteredData,}) => {
//   const [search, setSearch] = useState('');
//   const [button, setButton] = useState(true);
//   const navigate = useNavigate();


//   const handleSearch = () => {

//       searchData(search);
//       console.log(search);
//       setinvisible(!invisible);
//    if(!button){
//       setSearch('');
//        setFilteredData([]);
//      navigate("/") 
  

//     }
//     setButton(!button);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <div>
//       <TextField
//         id="outlined-basic"
//         label="Outlined"
//         variant="outlined"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         onKeyDown={handleKeyDown}
//         type="text"
//       />
   
//       <Button onClick ={handleSearch}>
//         {button ? 'Search' : 'Clear'}
//       </Button>
//     </div>
//   );
// };

// export default SearchComponent;


// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
// import './Search.css'

// const SearchComponent = ({ searchData,setinvisible, invisible,setFilteredData }) => {
//   const [search, setSearch] = useState('');
//   const [button, setButton] = useState(true);
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     searchData(search);
//     console.log(search);
//     setinvisible(!invisible);
//     navigate('/searchresult')

//     if (!button) {
//       setSearch('');
//       setFilteredData([])
//       navigate('/');
//     }

//     setButton(!button);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <div>
//       <TextField
//         id="outlined-basic"
//         label="Search Customer Order Id"
//         variant="outlined"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         onKeyDown={handleKeyDown}
//         type="text"
//       />
//       <Button onClick={handleSearch}>
//         {button ? 'Search' : 'Clear'}
//       </Button>
//     </div>
//   );
// };

// export default SearchComponent;

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './Search.css';

const SearchComponent = ({ searchData, setinvisible, invisible, setFilteredData }) => {
  const [search, setSearch] = useState('');
  const [button, setButton] = useState(true);
  const navigate = useNavigate();

  const handleSearch = () => {
    searchData(search);
    console.log(search);
    setinvisible(!invisible);
    navigate('/searchresult');

    if (!button) {
      setSearch('');
      setFilteredData([]);
      navigate('/');
    }

    setButton(!button);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search Customer Order Id"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        className={button ? 'search-input' : 'search-input-clear'}
        style={{ backgroundColor: 'white' }}
        
      />
      <Button onClick={handleSearch} className={button ? 'search-button' : 'clear-button'}>
        {button ? 'Search' : 'Clear'}
      </Button>
    </div>
  );
};

export default SearchComponent;

