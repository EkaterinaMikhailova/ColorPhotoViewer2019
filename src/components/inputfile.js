import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import PropTypes from 'prop-types'

const messages = defineMessages({
  select: {
    id: 'app.select',
    defaultMessage: 'Select file '
  }
})
/**
 * The props supported by the `FileInput` component
 *
 * @typedef {Object} FileInput~propTypes
 * @property {function} intl - to change language
 * @property {function} updateImg - call the parent function to change the current image
 */

/**
 * This class is designed to display a file open button and its operation.
 */
class FileInput extends React.Component {
  /** * @type {Filtres~propTypes} */ propTypes = {
    intl: PropTypes.func,
    updateImg: PropTypes.func
  }
  /**
   * Image reading
   */
  handleImageChange (e) {
    const { target } = e
    if (target.value.length > 0) {
      e.preventDefault()
      let reader = new FileReader()
      let file = e.target.files[0]
      reader.onloadend = () => {
        this.props.updateImg('', reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      target.reset()
    }
  }
  render () {
    const { intl: { formatMessage } } = this.props
    return (
      <div>
        <div className='row justify-content-center'>
          <button type='button' className='btn btn-primary btn-icon'>
            <label htmlFor='imgr'>{formatMessage(messages.select)}
            </label>
            <span className='icon'> <i className='fas fa-desktop'></i></span>
          </button>
        </div>
        <div className='file_upload'>
          <input className='fileInput' type='file' id='imgr'
            onChange={(e) => this.handleImageChange(e)} />
        </div>
      </div>
    )
  }
}

export default injectIntl(FileInput)
