import React, {useEffect, useState} from 'react'
import firebase from '../../firebase.js'
import Mentee from './Mentee.react'

const Mentees = () => {
  const [mentees, setMentees] = useState([])
  const [loadingMentees, setLoadingMentees] = useState(false)

  useEffect(() => {
    setLoadingMentees(true)
    const menteesRef = firebase.database().ref('users').orderByChild('roles/fellow').equalTo(true);
    menteesRef.on('value', (snapshot) => {
      const mentees = snapshot.val();
      let newState = [];
      console.log(mentees, 'mentees')
      for (let mentee in mentees) {
        newState.push({
          id: mentee,
          lastName: mentees[mentee].firstName,
          firstName: mentees[mentee].lastName
        });
      }
      setMentees(newState)
      setLoadingMentees(false)
    })
  }, [])

  if (loadingMentees)
    return <div>...loading</div>
  return (
    <div className='container'>
      <h3>Mentees</h3>
      <section className='display-item'>
          <div className="wrapper row">
              {mentees.map((mentee) => <Mentee mentee={mentee} key={mentee.id} />
              )}
          </div>
      </section>
    </div>
  )
}

export default Mentees