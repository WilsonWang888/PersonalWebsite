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


export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    if(newValue != 1)
      setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', position: 'sticky', }}>
      <Router>
        <Tabs sx={{ height: '100%' }} value={value} onChange={handleChange} centered>
          <Tab label="Home" to="/" component={Link} />
          <Tab label="Resume" onClick={function(){openResume(); }}/>
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
  );
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
