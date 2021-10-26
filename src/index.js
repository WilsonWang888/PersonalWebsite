import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './nav'
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.render(
  <div sx={{ display: 'inline-block' }}>
    <StyledEngineProvider injectFirst sx={{ height: '100%' }}>
      <Nav />
    </StyledEngineProvider>
  </div>,
  document.getElementById('root')
);

