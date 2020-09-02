import React, {useContext} from 'react'

import {authContext} from '../../providers/AuthProvider.react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import './header.scss'

const Header = () => {
  const currentUser = useContext(authContext)
  console.log(currentUser, 'currentUser')
  return (
    <header className="app-header">
      <Navbar bg="light" expand="lg">
        <div className='container'>
          <div className='header-left-content'>
            <Navbar.Brand href="/" className='brand'>TECHX</Navbar.Brand>
            <div>
              <input className='search-bar' type='text' data-toggle='dropdown' placeholder='SEARCH' autoFocus='' />
              <ul className="dropdown-menu" role='menu'>
                <li><a href=''>Tolu</a></li>
              </ul>
            </div>
          </div>
        
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/mentors">View Mentors</Nav.Link>
        <Nav.Link href="/mentees">View Mentees</Nav.Link>
        {currentUser ? (
        <div className='authState'>
          <img className='displayPhoto' src={currentUser.photoUrl} />
          <NavDropdown title={currentUser.firstName} id="basic-nav-dropdown">
            <NavDropdown.Item href="profile/edit">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </div> 
        ) :
        <div className='authState'>
          <Nav.Link href="/signup">Register</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </div>
        }
      </Nav>
    </Navbar.Collapse>
    </div>
  </Navbar>
      {/*<nav className="navbar navbar-static-top" role='navigation'>
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle" type='button' data-toggle='collapse' data-target='.navbar-ex1-collapse'>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a
                className="navbar-brand"
                href="/"
              >
              TechX
            </a>
          </div>
          <div>
            <input className='search-bar' type='text' data-toggle='dropdown' placeholder='SEARCH' autoFocus='' />
            <ul className="dropdown-menu" role='menu'>
              <li><a href=''>Tolu</a></li>
            </ul>
          </div>
          <div className="collapse navbar-collapse navbar-right navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              <li>
                <a href='/mentors'>View Mentors</a>
              </li>
              <li className='active'>
                <a href='/mentees'>View Mentees</a>
              </li>
              <li className='active'>
                <a href='/mentees'>View Mentees</a>
              </li>
              <li>
                <a>Sign Up as a Mentor</a>
              </li>
              <li>
                <a>Sign Up as a Mentee</a>
              </li>
              {currentUser && (
                <li className="dropdown">
                  <a 
                    className="dropdown-toggle profile-img"
                    href='#'
                    data-toggle='dropdown'
                    data-target='dropdown-menu'
                    role='button'
                    aria-expanded='false'>
                    <img src={currentUser.picture} alt=''/> | {currentUser.firstName}
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu" role='menu'>
                    <li href="#"><a>My Profile</a></li>
                    <li href="#"><a>Logout</a></li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>*/}
      </header>
  )
}

export default Header