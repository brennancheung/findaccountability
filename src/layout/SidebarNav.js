/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import {
  Dashboard as DashboardIcon
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
  },
}))

export const SidebarNav = props => {
  const { onClose, className, ...rest } = props
  const history = useHistory()
  const navTo = url => () => history.push(url)
  const classes = useStyles()

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem button className={classes.listItem} onClick={navTo('/')}>
        <ListItemIcon><DashboardIcon fontSize="small" /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button className={classes.listItem} onClick={navTo('/profile')}>
        <ListItemIcon className={classes.listItemIcon}><DashboardIcon fontSize="small" /></ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </List>
  )
}

SidebarNav.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
}
