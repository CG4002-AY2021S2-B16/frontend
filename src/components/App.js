import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import socketIOClient from "socket.io-client";
import styled from 'styled-components';

import Dashboard from './Dashboard/Dashboard'
import { addDataOne, addDataTwo, addDataThree, addData } from "../store/data";
import Header from './Header/Header';

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

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const socket = socketIOClient(API_ENDPOINT);
  //   // socket.on(SOCKET_NAMES[0], data => {
  //   //   // setResponseOne(data);
  //   //   dispatch(addDataOne(data));
  //   // });
  //   // socket.on(SOCKET_NAMES[1], data => {
  //   //   // setResponseTwo(data);
  //   //   dispatch(addDataTwo(data));
  //   // });
  //   // socket.on(SOCKET_NAMES[2], data => {
  //   //   // setResponseThree(data);
  //   //   dispatch(addDataThree(data));
  //   // });
  //   socket.on(SOCKET_NAME, data => {
  //     dispatch(addData(data));
  //   });
  // }, [dispatch]);

  return (
    <Window>
      <Header />
      <Dashboard />
    </Window>
  );
}

export default App;
