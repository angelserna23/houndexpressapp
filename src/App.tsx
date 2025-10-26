import React, { JSX } from "react";
import { Route, Routes } from "react-router-dom"; 
//Paginas
import Home from "../src/pages/Home/index";
import Historical from "../src/pages/Historical/index";
import List from "../src/pages/List/index";
import Register from "../src/pages/Register/index";
import Search from "../src/pages/Search/index";
import Status from "../src/pages/Status/index";

function App(): JSX.Element {
  return <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/historical" element={<Historical/>}></Route>
      <Route path="/list" element={<List/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
      <Route path="/status" element={<Status/>}></Route>
    </Routes>
  </div>;
}

export default App;