import React from 'react'
import logo1 from "../asset/abclogo.svg";
import logo2 from "../asset/hrclogo.svg"

export default function Navbar() {
  return (
    <>
    <div>
      
     <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={logo2} alt="" style={{ width: '150px', height: '50px' }} />
    </div>
    <div style={{ position: 'absolute', top:"0" }}>
      <img src={logo1} alt="" style={{ width: '150px', height: '50px' }} />
    </div>
    </div>
    <div> <h4 style={{color:"#db4437"}}>Invoice List</h4></div>
    </>
  );
}
