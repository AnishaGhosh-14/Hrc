
import React, { useState } from 'react';
import Analytics from './Analytics';
import PieAnalytics from './PieAnalytics';
import './Analytics.css'
import Input from '@mui/material/TextField';
import Button from '@mui/material/Button';

const InputAnalytics = ({ data }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const[pie,setpie]=useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value.toLowerCase()); 
  };

  const handleButtonClick = () => {
    const matchedChannel = data.find(
      (row) => row.distribution_channel.toLowerCase() === inputValue 
    );
    setFilteredData(matchedChannel ? [matchedChannel] : []); 
    setpie(true)
  };

  return (
    <>
    
    <div className='top'>
    <div className='main'>
      <div>
        <Input className='input'
         id="outlined-basic"
         label="Search Customer Order Id"
         variant="outlined"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter Distribution Channel"
          style={{ backgroundColor: 'white' }}
        />
        </div>
        <div>
        <Button className='btn' onClick={handleButtonClick}>Submit</Button>
        </div>
        </div>
      <div className='view-main'>
      <Analytics data={filteredData} inputValue={inputValue} />
      <PieAnalytics input={pie}/>
      </div>
      </div>
    </>
  );
};

export default InputAnalytics;


