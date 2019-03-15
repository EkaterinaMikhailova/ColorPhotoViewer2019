import React, { Component } from 'react';
import Cap from "./components/cap";
import Bottom from "./components/bottom";
import FileInput from "./components/inputfile";
import PhotoEdit from "./components/photoEdit";
import Photo from "./components/photo";
import Filtres from "./components/filtres";
import Save from "./components/save";

class App extends Component{
  render(){ 
    return(
      <div>
        <div id="home">
          <Cap />
          <br/>
          <FileInput />
          <PhotoEdit/>
          <br/>
        </div>
        <br/><br/>
        <div id="processing">
          <div class="container">
            <div class="row">
              <Photo />
            </div> 
            <div class="row">
              <Filtres />
            </div> 
          </div>
          <br/>
          <Save/>
        </div>
        <div id="about">
          <div class="title">
            <h2>О текстовом редакторе</h2>
          </div >
          <p class="text-center">Онлайн редактор фотографий для ПК. В нашем редакторе большой выбор фильтров для фото. Вы можете выбрать одно из предложенных фото или загрузить своё.</p> 
          <footer class="footer"></footer>
        </div>
        <Bottom />
      </div>
    );
  }
}

export default App;