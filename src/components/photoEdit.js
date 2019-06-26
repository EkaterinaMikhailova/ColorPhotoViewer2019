import React from 'react'
import PropTypes from 'prop-types'

/**
   * The props supported by the `PhotoEdit` component
   *
   * @typedef {Object} PhotoEdit~propTypes
   * @property {function} updateImg - call the parent function to change the current image
   */

/**
 * This class is designed to display a choice of three images.
 */
class PhotoEdit extends React.Component {
  /** * @type {PhotoEdit~propTypes} */ propTypes = {
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
