import React from 'react';

class Cap extends React.Component{
  render(){ 
    return(
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#home"><b>PHOTO EDITOR</b><img src="https://img.icons8.com/nolan/64/000000/stack-of-photos.png" alt=""></img> </a>
          </div> 
          <div className="toggle-button-cover">
            <a href="?locale=en" className="button1">eng</a>
            <a href="?locale=ru" className="button2">рус</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Cap;