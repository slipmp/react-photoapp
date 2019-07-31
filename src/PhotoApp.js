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

import React, { Component } from 'react';
import logo from './logo.svg';
import './PhotoApp.css';
import axios from 'axios'

class PhotoApp extends Component {
  render() {
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
        
        <PhotoList></PhotoList>  
        
      </div>
    );
  }
}

class PhotoList extends React.Component{
  constructor()
  {
    super()
    this.state={
      listOfPhotos: []
    }
    //Lesson Learned: Tried to insert this function inside render()
    //But the setState function calls render() causing an infinite loop,
    this.fetchPhotos();
  }
  
  //Go and featch a few photos belonging to the album 1 using axios
  fetchPhotos(){
    axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(function (response) {
      console.log(response.data);
      this.setState({listOfPhotos:response.data});
      console.log('Photos have been fetched and set into the state property called listOfPhotos');
    }.bind(this));
  }
  
  render ()
  {
    return (
      //React recommends each item on a given array to have an unique id
      //Reason why key is being provided for each element
      //since there is code involved on this return for the render() function
      //It must return value on each line. But there is a way to return a list of html elements
      //by simply returning an array of html elements
      //From React v.16.2 they introduced React.Fragment making the code cleaner :)
      this.state.listOfPhotos.map(function(item) { 
        return (
          <React.Fragment key={item.id}>
            <div className="PhotoApp-item">
              <img src={item.thumbnailUrl} alt={item.title}/>
              <div>{item.title}</div>
            </div>
          </React.Fragment>
          
        );
      })
    )
  }
}

export default PhotoApp;