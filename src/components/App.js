import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import socketIOClient from "socket.io-client";
import styled from 'styled-components';

import Dashboard from './Dashboard/Dashboard'
import { addDataOne, addDataTwo, addDataThree, addData } from "../store/data";
import Header from './Header/Header';
import Review from './Review/Review';
import SideNav from './SideNav/SideNav';

const Window = styled.div`
  text-align: center;
  height: 100vh;
  display: grid;
  grid-template-areas: 
    'header  header'
    'sidenav body  ';
  grid-template-columns: 200px 1fr;
  grid-template-rows: 100px 1fr;
`

// CONSTANTS
const API_ENDPOINT = "http://127.0.0.1:3001";
// const SOCKET_NAMES = ["dancerOne", "dancerTwo", "dancerThree"];
const SOCKET_NAME = 'predictions';

const App = () => {

  return (
    <Window>
      <Header />
      <SideNav />
      <BrowserRouter>
        <Switch>
          <Route component={Dashboard} exact={true} path="/" />
          <Route component={Review} exact={true} path="/review" />
        </Switch>
      </BrowserRouter>
    </Window>
  );
}

export default App;
