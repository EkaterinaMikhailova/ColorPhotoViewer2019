import React, { Component } from 'react';
import Cap from "./cap";
import Photo from "./photo";
import Filtres from "./filtres";
import Bottom from "./bottom";

class Processing extends Component{
  render(){ 
    return(
      <div>
        <Cap />
        <Photo />
        <Filtres />
        <Bottom />
      </div>
    );
  }
}

export default Processing;