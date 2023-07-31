
// import React, { useState, useEffect } from 'react';
// import './Updating.css';
// import Button from '@mui/material/Button';
// import ModalEdit from './Modal/ModalEdit';
// import ModelDelete from './Modal/ModelDelete';

// export default function UpdatingTable({ selectedRows,selected }) {
//   const [isEditDisabled, setIsEditDisabled] = useState(false);
//   const [editPortal,seteditPortal]=useState(false);
//   const [deletePortal,setdeletePortal]=useState(false);
// const handleEditPortal=()=>{
//   seteditPortal(true)
// }
// const handleDeletePortal=()=>{
//   setdeletePortal(true)
// }
//   useEffect(() => {
//     setIsEditDisabled(selectedRows.length !== 1);
//   }, [selectedRows]);
//   // console.log(selected);

//   return (
//     <div className='button'>
     
//         <Button className="refresh">Refresh</Button>
//         <Button className="edit" disabled={isEditDisabled} onClick={handleEditPortal}>
//           Edit
//         </Button>
//         <Button className="delete" disabled={selectedRows.length === 0} onClick={handleDeletePortal} >
//           Delete
//         </Button>
//         <Button className="predict" disabled={selectedRows.length === 0}>
//           Predict
//         </Button>
//         {editPortal && <ModalEdit seteditPortal={seteditPortal} selected={selected}/>}
//         {deletePortal && <ModelDelete setdeletePortal={setdeletePortal} selected={selected}/>}

       
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import './Updating.css';
import Button from '@mui/material/Button';
import ModalEdit from './Modal/ModalEdit';
import ModelDelete from './Modal/ModelDelete';

export default function UpdatingTable({ selectedRows, selected }) {
  const [isEditDisabled, setIsEditDisabled] = useState(false);
  const [editPortal, setEditPortal] = useState(false);
  const [deletePortal, setDeletePortal] = useState(false);

  const handleEditPortal = () => {
    setEditPortal(true);
  };

  const handleDeletePortal = () => {
    setDeletePortal(true);
  };

  useEffect(() => {
    setIsEditDisabled(selectedRows.length !== 1);
  }, [selectedRows]);

  return (
    <div className="button">
      <Button onClick={()=>{window.location.reload();}} className="refresh">Refresh</Button>
      <Button
        className={`edit ${isEditDisabled ? 'disabled' : ''}`}
        disabled={isEditDisabled}
        onClick={handleEditPortal}
      >
        Edit
      </Button>
      <Button className="delete" disabled={selectedRows.length === 0} onClick={handleDeletePortal}>
        Delete
      </Button>
      <Button className="predict" disabled={selectedRows.length === 0}>
        Predict
      </Button>
      {editPortal && <ModalEdit setEditPortal={setEditPortal} selected={selected} />}
      {deletePortal && <ModelDelete setDeletePortal={setDeletePortal} selected={selected} />}
    </div>
  );
}
