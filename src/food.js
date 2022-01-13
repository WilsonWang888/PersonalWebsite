import * as React from 'react';
import food1 from './food1.jpg'
import food2 from './food2.jpg'
import food3 from './food3.jpg'
import food4 from './food4.jpg'
import { ImageList, ImageListItem, Fab } from '@mui/material';

const itemData = [
  {
    img: food4,
    title: '1',
  },
  {
    img: food3,
    title: '2',
  },
  {
    img: food1,
    title: '3',
  },
  {
    img: food2,
    title: '4',
  }
]

function openInsta() {
  window.open("https://www.instagram.com/dongwangwilly/");
}


export default class Food extends React.Component {
  render() {
    return (
      <>
        <Fab color="primary" aria-label="follow" variant="extended" sx={{ textAlign: "right", marginLeft: "85%" }} onClick={function () { openInsta(); }}>
          <p sx={{ textAlign: "right" }}>
            Follow me
          </p>
        </Fab>
        <ImageList sx={{ width: 1100, height: 1050, marginLeft: "auto", marginRight: "auto" }} cols={2} >
          {itemData.map((item) => (
            <ImageListItem key={item.img} sx={{ paddingLeft: "50px", paddingRight: "50px", paddingTop: "30px", paddingBottom: "30px" }}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </>
    )
  }
}