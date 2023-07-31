import React, { useState } from "react";
import FetchData from "./Fetch";
import Table from "./Component/HomePage/Table";
import Search from "./Util/SearchComponent";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./Util/Header";
import "./App.css";
import AddData from "./Component/AddData/AddData";
import InputAnalytics from "./Component/AnalyticsView/InputAnalytics";
import Navbar from "./Component/Navbar";
import Footer from "./Component/FooterPart";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [invisible, setInvisible] = useState(false);

  // const handleSearchData = (searchValue) => {
  //   const foundData = data.find((row) =>
  //     row.distribution_channel.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  //   setFilteredData(foundData ? [foundData] : []);
  // };
  const handleSearchData = (searchValue) => {
    const foundData = data.find((row) =>
      row.customer_id.toString().includes(searchValue.toLowerCase())
    );
    setFilteredData(foundData ? [foundData] : []);
  };
  console.log(setInvisible);

  return (
    <div>
      <Navbar />
      <FetchData setData={setData} />

      <BrowserRouter>
        <div className="header-gap">
          <Header invisible={invisible} />
          <Search
            searchData={handleSearchData}
            setinvisible={setInvisible}
            invisible={invisible}
            setFilteredData={setFilteredData}
          />
        </div>
        <Routes>
          <Route
            path="/home"
            element={
              <Table data={filteredData.length > 0 ? filteredData : data} />
            }
          />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/adddata" element={<AddData />} />
          <Route
            path="/analyticsView"
            element={<InputAnalytics data={data} />}
          />
          <Route path="/searchresult" element={<Table data={filteredData} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
