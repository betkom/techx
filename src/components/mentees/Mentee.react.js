import React from 'react'

const Mentee = ({mentee}) => {
  return (
    <div className='col-xs-6 col-sm-3'>
      <a href={`mentees/${mentee.id}`}>
        <div className='user-wrap'>
          <div className='profile-pic'>
            <span className='f-badge'>MNE</span>
            <img src='https://picsum.photos/200' alt='mentee-profile'/>
          </div>
          <div className='user-name'>
            <pre><h5>{mentee.lastName} {mentee.firstName}</h5></pre>
            <p className="text-muted text-wrap">Aug 28, 2020</p>
          </div>
        </div>
      </a>
    </div>
    
  )
}

export default Mentee