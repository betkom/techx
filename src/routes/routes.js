import React from 'react'
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom"
import Home from '../components/home/Home.react'
import AddMentee from '../components/mentees/AddMentee.react'
import Mentees from '../components/mentees/Mentees.react'
import Mentors from '../components/mentors/Mentors.react'
import MenteeDetails from '../components/mentees/MenteeDetails.react'
import LoginMentor from '../components/auth/LoginMentor.react'
import Profile from '../components/shared/Profile.react'


function AppRoute() {
  return (
    <BrowserRouter>
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
        <Route path='/profile/edit'>
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoute