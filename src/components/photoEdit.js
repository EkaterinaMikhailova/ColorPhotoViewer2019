import React, { Component } from 'react';

class PhotoEdit extends Component{
  render(){
    return(
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
          <a href = "#/processing"><img src ="1.jpg" class="img-fluid" alt=""></img></a>
          </div> 
          <div class="col-md-4">
          <a href = "#/processing"><img src ="pic1.jpg" class="img-fluid" alt=""></img></a>
          </div>
          <div class="col-md-4">
            <a href = "#/processing"><img src ="2.jpg" class="img-fluid" alt=""></img></a>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoEdit; 