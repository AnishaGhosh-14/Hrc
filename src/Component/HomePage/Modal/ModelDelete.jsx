// import React from 'react'
// import  ReactDOM  from 'react-dom';
// import Button from '@mui/material/Button';

// export default function ModelDelete({setdeletePortal}) {
//     const close=()=>{
//         setdeletePortal(false)
//         }
        
//   return  ReactDOM.createPortal( 
//     <div className='testing'>
//     <div className='modal-wrapper'>
//         <div className='modal-container'>
//             <h3>Delete Records?</h3>
//             <p>
//                 Are you sure you want to delete these record[s]?
//             </p>
//         <Button onClick={<DeleteDat></DeleteDat> }>Edit</Button>
//         <Button onClick={close}>Cancel</Button>

//         </div>
         
//     </div>
  
// </div>,document.querySelector(".myPortalModalDiv")
//   )
// }


import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './ModalEdit.css'

const ModelDelete = ({ setdeletePortal,selected }) => {
  const [response, setResponse] = useState('');
  const [id, setId] = useState('');
  const nagivate=useNavigate();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/Mile_Stone_3/delete?id=${selected}`);
      console.log(response.data); // You can handle the response as needed
      setResponse(response.data);
    //   setdeletePortal(false); // Close the delete modal after successful deletion
    nagivate("/")
    } catch (error) {
      console.error(error);
    }
  };

  const close = () => {
    // setdeletePortal(false);
    // nagivate("/")
    window.location.href = "/";
    

  };

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  return ReactDOM.createPortal(
    <div className='testing'>
      <div className='modal-wrapper'>
        <div className='modal-container'>
          <h3>Delete Record?</h3>
          <p>Are you sure you want to delete this record?</p>
          {/* <input type='text' value={id} onChange={handleInputChange} /> */}
          <Button className='btn1' onClick={handleDelete}>Delete</Button>
          <Button className='btn2' onClick={close}>Cancel</Button>
          <p>{response}</p>
        </div>
      </div>
    </div>,
    document.querySelector('.myPortalModalDiv')
  );
};

export default ModelDelete;
