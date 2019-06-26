import React from 'react'
import PropTypes from 'prop-types'

class PhotoEdit extends React.Component {
  propTypes = {
    updateImg: PropTypes.func
  }
  render () {
    return (
      <div className='container' id='processing'>
        <div className='row'>
          <div className='col'>
            <button onClick={() => { this.props.updateImg('1.jpg', '') }}><img src ='1.jpg' className='img-fluid' alt=''></img></button>
          </div>
          <div className='col'>
            <button onClick={() => { this.props.updateImg('pic1.jpg', '') }}><img src ='pic1.jpg' className='img-fluid' alt=''></img></button>
          </div>
          <div className='col'>
            <button onClick={() => { this.props.updateImg('2.jpg', '') }}><img src ='2.jpg' className='img-fluid' alt=''></img></button>
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoEdit
