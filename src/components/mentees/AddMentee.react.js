import firebase from '../../firebase.js'
import React, {useState} from 'react'

const AddMentee = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [location, setLocation] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const usersRef = firebase.database().ref('users');
    const mentee = {
      firstName,
      lastName,
      shortBio: 'I like coding',
      videoUrl: 'https://www.youtube.com/watch?v=9xwazD5SyVg',
      roles: {
        fellow: true
      }
    }
    usersRef.push(mentee)
    setFirstName('')
    setLastName('')
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text" 
        name="firstName"
        onChange={e => {
          setFirstName(e.target.value)
        }}
        value={firstName}
        placeholder='First Name'/>
      <input
        type="text" 
        name="lastName"
        onChange={e => {
          setLastName(e.target.value)
        }}
        value={lastName}
        placeholder='Last Name'/>
        <button>Submit</button>
    </form>
  )
}

export default AddMentee