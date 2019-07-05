import React from 'react'
import Navbar from './Navbar'
import Partners from './Partners'
import Profile from './Profile'
import { Redirect, Route, Switch } from 'react-router-dom'

const Dashboard = () => <h1>Dashboard</h1>
const Actions = () => <h1>Daily Actions</h1>
const Goals = () => <h1>Goals</h1>
const Reports = () => <h1>Reports</h1>

const AuthorizedApp = () => {
  return (
    <Navbar>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/actions" component={Actions} />
        <Route path="/goals" component={Goals} />
        <Route path="/partners" component={Partners} />
        <Route path="/profile" component={Profile} />
        <Route path="/reports" component={Reports} />
        <Redirect to="/" />
      </Switch>
    </Navbar>
  )
}

export default AuthorizedApp
