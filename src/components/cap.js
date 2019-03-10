import React, { Component } from 'react';

class Cap extends Component{

  render(){ 
    return(
        <div class="navbar navbar-inverse navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="_blank"><b>PHOTO EDITOR</b><img src="https://img.icons8.com/nolan/64/000000/stack-of-photos.png" alt=""></img> </a>
            </div>
            <div class="dropdown open">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <a href="_blank">Язык</a>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="_blank">Action</a>
                <a class="dropdown-item" href="_blank">Another action</a>
                <a class="dropdown-item" href="_blank">Something else here</a>
              </div>
             </div>
          </div>
        </div>
    );
  }
}

export default Cap;