import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export default class Recipes extends React.Component {
  render() {
    return (
      <>
        <Accordion sx={{ width: '100%', bgcolor: 'background.paper', marginLeft: "auto", marginRight: "auto"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Balsamic Vinaigrette</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                2 tbsp Olive oil
              </ListItem>
              <ListItem>
                4 tbsp Neutral oil
              </ListItem>
              <ListItem>
                2 tbsp Balsamic vinegar
              </ListItem>
              <ListItem>
                2 tbsp Sherry vinegar
              </ListItem>
              <ListItem>
                1 Diced shallot
              </ListItem>
              <ListItem>
                Salt and pepper to taste
              </ListItem>
              <ListItem>
                <i>Mix well</i>
              </ListItem>

            </List>
          </AccordionDetails>
        </Accordion>
      </>
    )
  }
}