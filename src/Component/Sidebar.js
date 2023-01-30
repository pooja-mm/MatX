import React from "react";
import Analytics from "../Sidebarcontents/Analytics";
import Dashboard from "../Sidebarcontents/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Alternative from "../Sidebarcontents/Alternative";
import Inventory from "../Sidebarcontents/Inventory";
import CustomerList from "../Sidebarcontents/CustomerList";
import Viewcustomer from "../Sidebarcontents/Viewcustomer";
import Newcustomer from "../Sidebarcontents/Newcustomer";

function Sidebar() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="alternative" element={<Alternative />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="customerList" element={<CustomerList />} />
            <Route path="viewcustomer" element={<Viewcustomer />} />
            <Route path="newcustomer" element={<Newcustomer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Sidebar;
