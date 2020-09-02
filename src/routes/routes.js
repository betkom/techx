import React from 'react'
import {
  Switch,
  Route
} from "react-router-dom"
import Home from '../components/home/Home.react'
import AddMentee from '../components/mentees/AddMentee.react'
import Mentees from '../components/mentees/Mentees.react'
import Mentors from '../components/mentors/Mentors.react'
import MenteeDetails from '../components/mentees/MenteeDetails.react'
import LoginMentor from '../components/auth/LoginMentor.react'


function AppRoute() {
  return (
    <div>
      <Switch>
        <Route path='/login/mentor'>
          <LoginMentor />
        </Route>
        <Route path='/mentors'>
          <Mentors />
        </Route>
        <Route path='/mentees/:id'>
          <MenteeDetails />
        </Route>
        <Route path='/mentees'>
          <Mentees />
        </Route>
        <Route path='/add-mentee'>
          <AddMentee />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default AppRoute