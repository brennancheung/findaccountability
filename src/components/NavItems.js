import React from 'react'
import { Badge, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core'
import {
  Assessment as AssessmentIcon,
  MyLocation as MyLocationIcon,
  Dashboard as DashboardIcon,
  List as ListIcon,
  AccountCircle as AccountCircleIcon,
  People as PeopleIcon,
} from '@material-ui/icons'
import { withRouter } from 'react-router-dom'

const NavItems = ({ history }) => {
  const navTo = link => () => { history.push(link) }

  return (
    <Paper elevation={4}>
      <Card>
        <CardContent>
          <List>
            <ListItem button onClick={navTo('/')}>
              <Badge badgeContent={0} color="secondary">
                <ListItemIcon><DashboardIcon /></ListItemIcon>
                <ListItemText primary="Dashboard" />
              </Badge>
            </ListItem>
            <ListItem button onClick={navTo('/profile')}>
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary="My Profile" />
            </ListItem>
            <ListItem button onClick={navTo('/partners')}>
              <ListItemIcon><PeopleIcon /></ListItemIcon>
              <ListItemText primary="Find Partners" />
            </ListItem>
            <ListItem button onClick={navTo('/goals')}>
              <ListItemIcon><MyLocationIcon /></ListItemIcon>
              <ListItemText primary="Goals" />
            </ListItem>
            <ListItem button onClick={navTo('/actions')}>
              <ListItemIcon><ListIcon /></ListItemIcon>
              <ListItemText primary="Daily Actions" />
            </ListItem>
            <ListItem button onClick={navTo('/reports')}>
              <ListItemIcon><AssessmentIcon /></ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Paper>
  )
}

export default withRouter(NavItems)
