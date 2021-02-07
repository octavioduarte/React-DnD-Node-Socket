import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { MainStyled } from './styled'


ReactDOM.render(
  <MainStyled.Container>
    <App />
  </MainStyled.Container>,
  document.getElementById('root')
);

