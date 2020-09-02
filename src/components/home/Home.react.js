import React, {Fragment} from 'react'
import RoleAsMentor from './RoleAsMentor.react'
import Mentees from '../mentees/Mentees.react'

const Home = () => {
  return (
    <Fragment>
      <section className='banner'>
        <div className='container'>
          <div className='caption'>
            <h3>Who we are</h3>
            <p>TechX is an organization that aims to provide a platform for top professionals to connect with each other in a mentee/mentor relation</p>
          </div>
        </div>
      </section>
      <RoleAsMentor />
      <Mentees />
    </Fragment>
  )
}

export default Home