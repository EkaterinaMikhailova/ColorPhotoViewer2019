import React, { Component } from 'react';

class Save extends Component{
  render(){ 
    return(
      <div id="sv">
        <button type="button" class="btn btn-primary btn-lg btn-icon">
          <span class="icon"><i class="fas fa-download"></i></span>Скачать
        </button>
      </div>
    );
  }
}

export default Save;