import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Dashboard from './Dashboard/Dashboard'
import Header from './Header/Header';
import History from './History/History';
import Review from './Review/Review';
import SideNav from './SideNav/SideNav';

import '../index.css';
import GlobalFonts from '../fonts/fonts';

const Window = styled.div`
  display: grid;
  grid-template-areas: 
    'header  header'
    'sidenav body  ';
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px 1fr;
  height: 100vh;
  font-family: Inter;
`

const App = () => {

  return (
    <Window>
      <GlobalFonts />
      <Header />
      <BrowserRouter>
      <SideNav />
        <Switch>
          <Route component={Dashboard} exact={true} path="/" />
          <Route component={Review} exact={true} path="/review" />
          <Route component={History} exact={true} path="/history" />
        </Switch>
      </BrowserRouter>
    </Window>
  );
}

export default App;
