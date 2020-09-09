
import React, {useEffect, useState} from 'react'
import firebase from '../../firebase.js'
import Mentor from './Mentor.react'

const Mentors = () => {
  const [mentors, setMentors] = useState([])
  const [loadingMentors, setLoadingMentors] = useState(false)

  useEffect(() => {
    setLoadingMentors(true)
    getMentors()
  }, [])


  const getMentors = () => {
    const mentorsRef = firebase.database().ref('users').orderByChild('roles/mentor').equalTo(true);
    mentorsRef.on('value', (snapshot) => {
      const mentors = snapshot.val();
      let newState = [];
      for (let mentor in mentors) {
        newState.push({
          id: mentor,
          lastName: mentors[mentor].firstName,
          firstName: mentors[mentor].lastName
        });
      }

      setMentors(newState)
      setLoadingMentors(false)
    })
  }

  if (loadingMentors)
    return <div>...loading</div>
  return (
    <div className='container'>
      <h3>Mentors</h3>
      <section className='display-item'>
          <div className="wrapper row">
              {mentors.map((mentor) => <Mentor mentor={mentor} key={mentor.id} />
              )}
          </div>
      </section>
    </div>
  )
}

export default Mentors