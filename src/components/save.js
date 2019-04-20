import React from 'react';
import { injectIntl, defineMessages } from "react-intl";

const messages = defineMessages({
  save: {
    id: 'app.save',
    defaultMessage: 'Download file '
  }
})

class Save extends React.Component{
  render(){ 
    const {intl:{formatMessage}} = this.props;
    var e = '';
    if(this.props.imagePreviewUrl){ 
      e =this.props.imagePreviewUrl;
    }
    else if (this.props.name){
      e =this.props.name;
    }
    return(
      <div className="row justify-content-center">
        <button type="button" className="btn btn-primary btn-icon">
          <a href={e} download="newfhoto.jpg">{formatMessage(messages.save)}</a>
          <span className="icon"><i className="fas fa-download"></i></span>
        </button>
      </div>
    );
  }
}

export default injectIntl(Save);