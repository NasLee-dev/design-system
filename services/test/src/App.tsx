import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { vars, classes } from '@ds/themes';
import styled from '@emotion/styled';

const theme = {
  colors: {
    primary: vars.colors.$static.light
  }
}

function App() {
  console.log(classes);
  return (
    <ThemeProvider theme={theme}>
      <View />
    </ThemeProvider>
  );
}

export default App;

const View = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Text className='headingxl'>
        Edit <code>src/App.tsx</code> and save to reload.
        {vars.box.radii.base}
      </Text>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
)

const Text = styled.p`
  color: ${vars.colors.$static.light.red[500]}
`