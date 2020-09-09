import React, {useEffect, useState, useContext, useRef} from 'react'

import {authContext} from '../../providers/AuthProvider.react'
import firebase from '../../firebase.js'
import moment from 'moment'

import Form from './forms/Form.react'
import TextArea from './forms/TextArea.react'
import Input from './forms/Input.react'
import Spinner from 'react-bootstrap/Spinner'
import Upload from './forms/Upload.react'

const Profile = () => {
  const [profile, setProfile] = useState(null)
  const currentUser = useContext(authContext)
  const formRef = useRef(null)

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser, 'uid')
      const profileRef = firebase.database().ref(`users/${currentUser.id}`)
      profileRef.on('value', function(snapshot) {
        console.log(snapshot.val(), 'snapshot')
        if (snapshot.val()) {
          setProfile(snapshot.val())
        }
      })
    }
  }, [currentUser])

  const open = () => {
    console.log(open)
  }

  const updateProfile = () => {
    console.log(formRef.current.formData(), 'ref')
  }



  console.log(profile, 'profile')
  
  if (profile) {
    return (
      <section className="content fellows">

        <div className="container">
          <h2 className="light">Edit Profile</h2>
          <hr/>
          <Form onSubmit={updateProfile} ref={formRef}>
            <div className="row">
              <div className="col-xs-8 col-xs-offset-2 col-sm-3 col-sm-offset-0">
                <div className="unit-wrap">
                  <div className="profile-pic"><img src={profile.photoUrl} alt='avatar' /></div>
                  <div className="user-name">
                    <h5><a>{profile.fullName}</a></h5>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-9">
                <div className="unit-wrap bio">
                  <div className="user-profile">
                    <h4>Bio</h4>
                    <hr/>
                    <TextArea name='longBio' defaultValue={profile.longBio} placeholder="enter full bio here" rows="5" className="form-control"/>
                  </div>
                </div>
                <div className="unit-wrap bio">
                  <div className="user-profile">
                    <h4>Profile Details</h4>
                    <hr/>
                      <div className="form-group">
                        <Input type="text" placeholder="Full Name" defaultValue={profile.fullName} className="form-control" name='fullName'/></div>
                      <div className="form-group">
                        <label>Github Profile</label>
                        <div className="input-group">
                          <div className="input-group-addon">github.com/</div>
                          <Input type="text" placeholder="Please enter github username" defaultValue={profile.gitHubUrl} className="form-control"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-5">
                          <label>Date Joined</label>
                          <div className="form-group">
                            <div className="input-group">
                              
                              <Input name='joinedDate' type="date" defaultValue={moment(profile.joinedDate).format('YYYY-MM-DD')} className="form-control ui-datepicker" />
                              <span className="input-group-btn">
                                <button type="button" onClick={open} className="btn btn-default">
                                  <i className="glyphicon glyphicon-calendar"></i>
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <label>Location</label>
                          <div className="form-group">
                            <select defaultValue={profile.location} placeholder="Select location" className="form-control">
                              <option>Lagos</option>
                              <option>New York</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label>Level</label>
                          <div className="form-group">
                            <select defaultValue={profile.level} className="form-control">
                              <option>L2</option>
                            </select>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="unit-wrap bio">
                  <label>Upload Video   </label>
                  <div className="form-group controls">
                    <Upload defaultValue={profile.videoUrl} name="videoUrl" type='video' />
                    <video src={profile.videoURL} height="200" width="300" controls="controls" />
                    {/*<p data-ng-if="changeSize">video too large or invalid format, please change video   </p>*/}
                  </div>
                </div>
                <div className="col-md-4 col-md-offset-8">
                  <button onClick={updateProfile} className="btn btn-primary btn-block">Save</button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </section>
    )
  } else {
    return (
      <div className="container content">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      </div>
    )
  }
}

export default Profile