import React from 'react';
import Cap from "./components/cap";
import Bottom from "./components/bottom";
import FileInput from "./components/inputfile";
import PhotoEdit from "./components/photoEdit";
import Photo from "./components/photo";
import Filtres from "./components/filtres";
import Save from "./components/save";
import { injectIntl, defineMessages } from "react-intl";

const messages = defineMessages({
  about: {
    id: 'app.about',
    defaultMessage: 'About text editor'
  },
  content: {
    id: 'app.content',
    defaultMessage: 'Online photo editor for PC. In our editor, a large selection of filters for the photo. You can choose one of the proposed photos or upload your own.'
  }
})

class App extends React.Component{
  state = {
    imagePreviewUrl: '',
    name: '1.jpg',
    filter: 'normal',
  };
  updateImg = (value1, value2) => {
    this.setState({ name: value1, imagePreviewUrl: value2 })
  }
  updateFilter = (value) => {
    this.setState({filter: value});
  }
  render(){ 
    const {intl:{formatMessage}} = this.props;
    return(
      <div>
        <div id="home">
          <Cap/>
          <br/>
          <FileInput updateImg={this.updateImg}/>
          <PhotoEdit updateImg={this.updateImg}/>
          <br/>
        </div>
        <div id="IM">
          <Photo imagePreviewUrl={this.state.imagePreviewUrl} name={this.state.name} filter={this.state.filter}/>
          <Filtres updateFilter={this.updateFilter}/>
        </div>
        <br/> 
        <Save imagePreviewUrl={this.state.imagePreviewUrl} name={this.state.name}/>
        <div id="about">
          <div className="title">
            <h2>{formatMessage(messages.about)}</h2>
          </div >
          <p className="text-center">
            {formatMessage(messages.content)}
          </p> 
          <footer className="footer"></footer>
        </div>
        <Bottom />
      </div> 
    );
  }
}
export default injectIntl(App);