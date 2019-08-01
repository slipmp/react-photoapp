/*
There are two types of components
1 - Class component:
class Photos extends Component {...}
2 - Functional Component 
function Photos(props) {...}

There are not much differences in them, but Functional components are simpler
and it is usually recommended for most cases

Class components have a bit of more capabilities, 
such as having Local state, a feature available only to classes.
*/

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './PhotoApp.css';
import axios from 'axios'


const PhotoApp = () =>  {
  const [listOfPhotos, setListOfPhotos] = useState({ listOfPhotos: [] });

  //Go and featch a few photos belonging to the album 1 using axios
  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/photos?albumId=1',
      );
      console.log(result.data);
      console.log('Photos have been fetched and set into the state property called listOfPhotos');
      setListOfPhotos(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className="PhotoApp">
      <header className="PhotoApp-header">
        <img src={logo} className="PhotoApp-logo" alt="logo" />
        <h1 className="PhotoApp-title">Photos Application</h1>
        <h4>My first React Application to understand the basics. <br />
        PhotoApp fetches photos from a public accessible API and renders on the page</h4>
      </header>
      <p className="PhotoApp-intro">
        List of Photos
      </p>
      <PhotoList photos={listOfPhotos}></PhotoList>  
    </div>
  );
}

const PhotoList = props => ( 
  <>
  {Array.from(props.photos).map(item => ( 
    <div key={item.id}>
      <div className="PhotoApp-item">
        <img src={item.thumbnailUrl} alt={item.title}/>
        <div>{item.title}</div>
      </div>
    </div>
  ))}
  </>
);


export default PhotoApp;