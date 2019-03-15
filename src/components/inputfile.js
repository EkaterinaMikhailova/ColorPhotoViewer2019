import React, { Component } from 'react';

class FileInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${
        this.fileInput.current.files[0].name
      }`
    );
  }
  render() {
    return (
      <div class = "row justify-content-center">  
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="file" ref={this.fileInput} />
          </label>
        </form>
      </div>
    );
  }
}

export default FileInput;