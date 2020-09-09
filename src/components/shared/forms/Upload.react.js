import PropTypes from 'prop-types'
import React from 'react'
import InputBase from './InputBase.react'
import firebase from '../../../firebase.js'
import ProgressBar from 'react-bootstrap/ProgressBar'


const storageRef = firebase.storage().ref();

// import fileWhitelist from '../../lib/file_whitelist.js'
const fileWhitelist = [
  'mp4',
  'mp3',
  'png',
  'jpeg',
  'jpg'
]

export default class Upload extends InputBase {
  constructor(props) {
    super(props)

    this.setInitialState({
      ...props,
      errors: ''
    })

    // Ensure that the `defaultValue` is set as the current `value` here so that the current image
    // correctly shows in the preview. This is a bit weird, but it's a workaround to avoid changing
    // core functionality in the `setInitialState` method used by all legacy `input`s. --BLR
    this.state.formValue = props.defaultValue

    this.handleImage = this.handleImage.bind(this)
    this.onFormElementChange = this.onFormElementChange.bind(this)
    this.removeImage = this.removeImage.bind(this)
    this.uploadToCloud = this.uploadToCloud.bind(this)
  }

  formValue() { return this.state.formValue }

  handleImage(event) {
    if (event)
      event.preventDefault()

    // var reader = new FileReader()
    var ext = event.target.files[0].name.split('.').pop().toLowerCase()
    console.log(ext, 'ext')
    if (fileWhitelist.includes(ext)) {
      console.log(event.target.files[0])
      this.uploadToCloud(event.target.files[0])
      // reader.readAsDataURL(event.target.files[0])
      // reader.onload = upload => {
      //   const result = upload.target.result
      //   this.setState({formValue: result, errors: ''})
      //   this.onFormElementChange({target: {value: result}})
      // }
    } else {
      this.setState({errors: 'Invalid file format.'})
    }
  }

   uploadToCloud(file) {
    console.log('in upload to cloud')
    const uploadTask = storageRef.child('uploads/' + file.name).put(file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function(error) {

      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          this.setState({errors: 'You are not permitted to view this file'}) // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          this.setState({errors: 'upload canceled'})// User canceled the upload
          break;

        case 'storage/unknown':
        this.setState({errors: 'upload failed'})
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, function() {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
        this.setState({formValue: downloadURL, errors: ''})
        this.onFormElementChange({target: {value: downloadURL}})
      });
    });
  }

  removeImage(event) {
    if (event)
      event.preventDefault()

    this.onFormElementChange({target: {value: ''}})
    this.setState({formValue: ''})
    // $('input.image-upload-input')[0].value = ''
  }

  render() {
    const currentUrl = this.state.formValue

    return (
      <div className='image-upload'>
        <CurrentImage placeholderImage={this.props.placeholderImage} url={currentUrl} type={this.props.type} />
        <div className='form-group controls'>
        <div className='change-photo'>{currentUrl ? `Change ${this.props.type}` : `Upload ${this.props.type}`}</div>
          <input className='file-upload-input' onChange={this.handleImage} type='file' />
        </div>
        {this.state.progress && <p>
          Uploading video file, please wait....
          <ProgressBar now={this.state.progress} label={`${this.state.progress}%`} srOnly />
        </p>}
        <div className='remove-photo' onClick={this.removeImage}>{currentUrl ? 'Remove photo' : ''}</div>
        <div className='form-errors'>{this.state.errors}</div>
      </div>
    )
  }
}

Upload.defaultProps = {
  defaultValue: null
}

const CurrentImage = ({placeholderImage, url, type}) => {
  if (type !== 'image')
    return null
  else if (url)
    return (<img alt='Uploaded image' className='current-image' src={url} />)
  else
    return (<img alt='Placeholder image' className='current-image' src={placeholderImage} />)
}

CurrentImage.propTypes = {
  placeholderImage: PropTypes.string,
  url: PropTypes.string
}
