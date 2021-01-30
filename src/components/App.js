import styled from 'styled-components';

import Dashboard from './Dashboard/Dashboard'
import Header from './Header/Header';

const Window = styled.div`
  text-align: center;
  height: 100vh;
  display: grid;
  grid-template-areas: 
    'header'
    'body  ';
  grid-template-rows: 100px 1fr;
`

function App() {
  return (
    <Window>
      <Header grid-area="header" />
      <Dashboard grid-area="body" />
    </Window>
  );
}

export default App;
