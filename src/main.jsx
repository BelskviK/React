import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CollapsibleExample from "./components/header/navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Tabs from "./components/Tabs/Tabs.jsx";
import App from "./components/App/App.jsx";
import Table from "./components/Table/Table.jsx";

//pages
import Layout from "./pages/Layout";
import Social from "./pages/Social";
import Warehouse from "./pages/Warehouse";
import Marketplace from "./pages/Marketplace";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CollapsibleExample />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Social />} />
          <Route path="Warehaose" element={<Warehouse />} />
          <Route path="Marketplace" element={<Marketplace />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Tabs />
    <Table />
    <App />
  </StrictMode>
);
