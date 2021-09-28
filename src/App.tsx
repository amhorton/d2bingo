import React from 'react';
import styled, { createGlobalStyle} from 'styled-components';
import logo from './logo.svg';
import './App.css';

import BingoCard from './components/BingoCard';

const Global = createGlobalStyle`
  body {
    background-color: peachpuff;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <Wrapper>
      <Global />
      <h1>Destiny 2 Bingo (Beyond Light Edition)</h1>
      <BingoCard />
    </Wrapper>
  );
}

export default App;
