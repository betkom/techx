import React from 'react'
import firebase, { auth, provider } from '../../firebase.js';

const LoginMentor = () => {
  const usersRef = firebase.database().ref('users');
  const login = () => {
    auth.signInWithPopup(provider) 
      .then((result) => {
        console.log(result, 'result')
        console.log(result.additionalUserInfo)
        const userRef = firebase.database().ref('users').child(result.user.uid)
        userRef.on('value', (snapshot) => {
          const user = snapshot.val()
          if (!user) {
            const newUser = {
              lastName: result.additionalUserInfo.profile.family_name || '',
              firstName: result.additionalUserInfo.profile.given_name || '',
              photoUrl: result.additionalUserInfo.profile.picture || '',
              email: result.additionalUserInfo.profile.email,
              roles: {
                mentor: true
              }
            };
            usersRef.child(result.user.uid).set(newUser)
          }
          console.log(user)
      })
    });
}
  return (
    <div>
      <h3>LoginMentor</h3>
      <a href='' onClick={login}>Login with Google</a>
    </div>
  )
}

export default LoginMentor