import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Intro from './intro';
import Resume from './resume'
import Pdf from './WilsonWangResume.pdf';


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
        this.setState({value: newValue});
        console.log(this.state.value + ' ' + newValue)
    };

  }

  render() {
    return (
      <>
      <Box sx={{ width: '100%', position: 'sticky', }}>
        <Router>
          <Tabs sx={{ height: '100%' }} value={this.state.value} onChange={this.state.handleChange} centered>
            <Tab label="Home" to="/" component={Link} />
            <Tab label="Resume" onClick={function () { openResume(); }} />
            <Tab label="Food" to="/food" component={Link} />
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
      </>
    );
  }
}

// these need to have their own files
// I think index should just point to a nav and the nav can figure out what to show
function openResume() {
  window.open(Pdf);
}


function Food() {

  return (
    <>
      <h2>Food</h2>
    </>
  );
}
