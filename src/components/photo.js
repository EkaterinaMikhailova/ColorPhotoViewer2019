import React, { Component } from 'react';
import Save from "./save";

class Photo extends Component{
  render(){ 
    return(
      <div id="photostyle">
        <div class="container">
          <div class="row">
            <div class="col-11">
              <img src="pic1.jpg" alt="" class="rounded img-fluid"></img>
            </div>
            <div class="col-1">
              <Save/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Photo;