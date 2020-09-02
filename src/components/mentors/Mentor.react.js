import React from 'react'

const Mentor = ({mentor}) => {
  return (
    <div>
      <img src='https://picsum.photos/200' alt="mentor image"/>
       <pre><p>{mentor.lastName} {mentor.firstName}</p></pre>
       <p>{mentor.shortBio}</p>
    </div>
  )
}

export default Mentor