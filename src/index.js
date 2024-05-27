import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import Useref from "./Useref";
// import Usereducer from "./Usereducer";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
// import Prods from "./Prods";
// import Api from "./Api";
// import Login from "./login";
// import Payment from "./Payment";
// import Mail from "./Main";
// import Usereference from "./Usereference";
// import Usememo from "./Usememo";
// import Referece from "./Referece";
// import Callback from "./Callback";
import GetUsers from "./axios/GetUsers";
import { Context } from "./Context";
import Color from "./trigent/Color";
import Reducer from "./trigent/Reducer";
import Callback from "./trigent/Callback";
import Memo from "./trigent/Memo";
import Composition from "./trigent/Composition";
import Lift from "./trigent/Lift";
import ClassComp from "./trigent/ClassComp";
import Test from "./trigent/Test";
import Home from "./movie/Home";
import Filter_movie from "./movie/Filter_movie";
import GetMovie from "./movie/GetMovie";
// import AddUsers from "./axios/AddUsers";
// import UpdateUsers from "./axios/UpdateUsers";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetUsers />}></Route>
        <Route path="/add" element={<AddUsers />}></Route>
        <Route path="/update/:id" element={<UpdateUsers />}></Route>
      </Routes>
    </BrowserRouter> */}
    {/* <Context /> */}
    {/* <Color /> */}
    {/* <Reducer /> */}
    {/* <Callback /> */}
    {/* <Memo /> */}
    {/* <Composition /> */}
    {/* <Lift /> */}
    {/* <ClassComp /> */}
    {/* <Test /> */}
    {/* <Home/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<GetMovie />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);
