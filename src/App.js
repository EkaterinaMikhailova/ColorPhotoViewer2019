import React, { Component } from 'react';
import './App.css';
import Cap from "./components/cap";
import Bottom from "./components/bottom";
import FileInput from "./components/inputfile";
import PhotoEdit from "./components/photoEdit";

class App extends Component{
    render(){ 
    return(
        <div>
            <Cap />
            <FileInput />
            <PhotoEdit/>
            <div id="about">
                <div class="title">
                    <h2>О текстовом редакторе</h2>
                </div >
                <p class="text-center">Онлайн редактор фотографий для ПК. В нашем редакторе большой выбор фильтров для фото. Вы можете выбрать одно из предложенных фото или загрузить своё.</p> 
                <footer class="footer"></footer>
            </div>
            <Bottom/>
        </div>
        );
    }
}

export default App;