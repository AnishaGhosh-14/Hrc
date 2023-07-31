import React, { useState } from "react";
// import Button from '@mui/material/Button';
import { DataGrid, GridSlotsComponentsProps } from "@mui/x-data-grid";
import UpdatingTable from "./UpdatingTable";
import Navbar from "../Navbar";

// export function CustomFooterStatusComponent({children}){
//   return<>

//   {children}
//   </>
// }

const Table = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const [selected, setSelected] = useState(null);

  const handleSelectionChange = (selection) => {
    const selectedRowsData = selection.map((id) =>
      data.find((row) => row.id === id)
    );
    const selectedSlNos = selectedRowsData.map((row) =>
      row ? row.Sl_no : null
    );
    const selected = selectedSlNos[0];
    setSelectedRows(selection);
    setSelected(selected);
  };

  const columns = [
    {
      field: "Sl_no",
      headerName: "Sl No ",
      width: 100,
    },
    {
      field: "customer_id",
      headerName: "CUSTOMER ORDER ID",
      width: 160,
    },
    {
      field: "sales_org",
      headerName: "SALES ORG",
      width: 85,
    },
    {
      field: "distribution_channel",
      headerName: "DISTRIBUTION CHANNEL",
      width: 250,
    },
    {
      field: "customer_number",
      headerName: "CUSTOMER NUMBER",
      width: 200,
    },
    {
      field: "company_code",
      headerName: "COMPANY CODE",
      width: 90,
    },
    {
      field: "order_amount",
      headerName: "OERDER AMOUNT",
      width: 90,
    },
    {
      field: "order_currency",
      headerName: "ORDER CURRENCY",
    },
    {
      field: "amount_usd",
      headerName: "ORDER AMOUNT",
    },
    {
      field: "order_creation_date",
      headerName: "ORDER CREATION DATE",
      width: 190,
    },

    //
  ];

  return (
    <div style={{ height: "410px", width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection
        onRowSelectionModelChange={handleSelectionChange}
      />
      <UpdatingTable selectedRows={selectedRows} selected={selected} />
    </div>
  );
};

export default Table;
