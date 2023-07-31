
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./ModalEdit.css";
import { useNavigate } from 'react-router-dom';

export default function ModalEdit(props) {
  const [orderCurrency, setOrderCurrency] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [distributionChannel, setDistributionChannel] = useState("");
  const nagivate=useNavigate();

  const handleUpdate = () => {
    const API_ENDPOINT = `http://localhost:8080/Mile_Stone_3/edit`;

    if (!orderCurrency || !companyCode || !distributionChannel) {
      console.error("Invalid or missing parameters");
      return;
    }

    const updatedData = new URLSearchParams();
    updatedData.append("id", props.selected);
    updatedData.append("orderCurrency", orderCurrency);
    updatedData.append("companyCode", companyCode);
    updatedData.append("distributionChannel", distributionChannel);

    fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: updatedData.toString(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error updating invoice");
        }
        console.log("Invoice updated successfully");
        nagivate("/")
        // props.setEditPortal(false);
      })
      .catch((error) => {
        console.error("Error updating invoice:", error);
      });
  };

  const handleClose = () => {
    props.setEditPortal(false);
    nagivate("/")
  };

  return (
    <div className="testing">
      <div className="modal-wrapper">
        <div className="modal-container">
          <h5>Edit</h5>
          <div>
            <div className="margin">
            <TextField
              id="orderCurrency"
              label="Order Currency"
              variant="outlined"
              name="orderCurrency"
              type="text"
              value={orderCurrency}
              onChange={(event) => setOrderCurrency(event.target.value)}
              style={{ backgroundColor: 'white' }}
            />
            <TextField
              id="companyCode"
              label="Company Code"
              variant="outlined"
              name="companyCode"
              type="number"
              value={companyCode}
              onChange={(event) => setCompanyCode(event.target.value)}
              style={{ backgroundColor: 'white' }}
            />
            </div>
            <TextField
            className="dc"
              id="distributionChannel"
              label="Distribution Channel"
              variant="outlined"
              name="distributionChannel"
              type="text"
              value={distributionChannel}
              onChange={(event) => setDistributionChannel(event.target.value)}
              style={{ backgroundColor: 'white' }}
            />
          </div>
          <Button className="btn1" onClick={handleUpdate}>Edit</Button>
          <Button className="btn2" onClick={handleClose}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}
