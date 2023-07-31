import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import "./AddData.css";


export default function AddData() {
  const [user, setUser] = useState({
    customerOrderId: "",
    salesOrg: "",
    distributionChannel: "",
    customerNumber: "",
    companyCode: "",
    orderAmount: "",
    orderCurrency: "",
    amountInUSD: "",
    orderCreation: ""
  });

  const {
    customerOrderId,
    salesOrg,
    distributionChannel,
    customerNumber,
    companyCode,
    orderAmount,
    orderCurrency,
    amountInUSD,
    orderCreation
  } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    try {
      await axios.post("http://localhost:8080/Mile_Stone_3/add", user);
      console.log("Data successfully sent to the server");
      clearData();
    } catch (error) {
      console.error("Error while sending data:", error);
    }
  };


  const clearData = () => {
    setUser({
      customerOrderId: "",
      salesOrg: "",
      distributionChannel: "",
      customerNumber: "",
      companyCode: "",
      orderAmount: "",
      orderCurrency: "",
      amountInUSD: "",
      orderCreation: ""
    });
  };

  return (
    <div className="box-1">
      <form onSubmit={onSubmit} className="form">
        <div>
          <TextField
            id="outlined-basic"
            label="CUSTOMER ORDER ID"
            variant="outlined"
            name="customerOrderId"
            value={customerOrderId}
            onChange={onInputChange}
            style={{ backgroundColor: 'white' }}
          />
          <TextField
            id="outlined-basic1"
            label="SALES ORG"
            variant="outlined"
            name="salesOrg"
            value={salesOrg}
            onChange={onInputChange}
            style={{ backgroundColor: 'white' }}
          />

          <TextField
            id="outlined-basic2"
            label="DISTRIBUTION CHANNEL"
            variant="outlined"
            name="distributionChannel"
            value={distributionChannel}
            onChange={onInputChange}
            style={{ backgroundColor: 'white' }}
          />
          <TextField
            id="outlined-basic3"
            label="CUSTOMER NUMBER"
            variant="outlined"
            name="customerNumber"
            value={customerNumber}
            onChange={onInputChange}
            style={{ backgroundColor: 'white' }}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic4"
            label="COMPANY CODE"
            variant="outlined"
            name="companyCode"
            value={companyCode}
            onChange={onInputChange}
            style={{ backgroundColor: 'white' }}
          />
          <TextField
            id="outlined-basic5"
            label="ORDER AMOUNT"
            variant="outlined"
            name="orderAmount"
            value={orderAmount}
            onChange={onInputChange}
            style={{ backgroundColor: 'white' }}
          />
          <TextField
            id="outlined-basic6"
            label="ORDER CURRENCY"
            variant="outlined"
            name="orderCurrency"
            value={orderCurrency}
            onChange={onInputChange}
            style={{ backgroundColor: 'white' }}
          />

          <TextField
            id="outlined-basic7"
            label="AMOUNT IN USD"
            variant="outlined"
            name="amountInUSD"
            value={amountInUSD}
            onChange={onInputChange}
            style={{ backgroundColor: 'white' }}
          />
          <TextField
            id="outlined-basic8"
            label="ORDER CREATION DATE"
            variant="outlined"
            name="orderCreation"
            value={orderCreation}
            onChange={onInputChange}
            style={{ backgroundColor: 'white' }}
            type="date"
          />
        </div>
        <Button className="add" type="submit">Add</Button>
        <Button className="cancel" type="button" onClick={clearData}>
          Clear Data
        </Button>
      </form>
    </div>
  );
}
