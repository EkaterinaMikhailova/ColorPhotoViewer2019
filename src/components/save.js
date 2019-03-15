import React, { Component } from 'react';

class Save extends Component{
  render(){ 
    return(
      <div class="row justify-content-center" id="sv">
        <button type="button" class="btn btn-primary btn-icon">
          <span class="icon"><i class="fas fa-download"></i></span>
          <a href="pic1.jpg" download="newfhoto.jpg">Скачать файл</a>
        </button>
      </div>
    );
  }
}

export default Save;