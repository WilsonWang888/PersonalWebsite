import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CssBaseline from "@mui/material/CssBaseline";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Intro from './intro';
import Resume from './resume'
import Food from './food'
import Pdf from './WilsonWangResume.pdf';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    background: {
      default: "#eeeeee"
    },
    primary: {
      main: "#6200ea",
    },
    secondary: {
      main: "#00c853",
    },
  },
});


export default class NavTabs extends React.Component {
  constructor(props) {
    super(props)
    const dict = {
      '': 0,
      'food': 2,
    }
    let url = window.location.href
    let path = url.slice(url.indexOf('/', 7) + 1, url.length);
    console.log(path);

    this.state = {
      value: dict[path]
    }

    this.state.handleChange = (event, newValue) => {
      if (newValue !== 1)
        this.setState({ value: newValue });
      console.log(this.state.value + ' ' + newValue)
    };

  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ width: '100%', position: 'sticky', fontSize: "large" }}>
          <Router>
            <Tabs sx={{ height: '100%' }} value={this.state.value} onChange={this.state.handleChange} centered>
              <Tab label="Home" to="/" component={Link} />
              <Tab label="Resume" onClick={function () { openResume(); }} >
                <OpenInNewIcon></OpenInNewIcon>
              </Tab>
              <Tab label="Food" to="/food" component={Link} />
              <Tab label="Projects" disabled />
            </Tabs>

            <Switch>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/food">
                <Food />
              </Route>
              <Route path="/">
                <Intro />
              </Route>
            </Switch>
          </Router>
        </Box>
      </ThemeProvider>
    );
  }
}

// these need to have their own files
// I think index should just point to a nav and the nav can figure out what to show
function openResume() {
  window.open(Pdf);
}

