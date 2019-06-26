import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'
import PropTypes from 'prop-types'

const messages = defineMessages({
  select: {
    id: 'app.select',
    defaultMessage: 'Select file '
  }
})
class FileInput extends React.Component {
  propTypes = {
    intl: PropTypes.func,
    updateImg: PropTypes.func
  }
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
        <input className="fileInput" type="file"  accept=".jpg,.png" id="imgr"
            onChange={(e) => this.handleImageChange(e)} />
        </div>
      </div>
    )
  }
}

export default injectIntl(FileInput)
