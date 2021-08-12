import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  listItemButton: {
    whiteSpace: 'nowrap',
  },
}))

export const CTAButton = ({ children, onClick, href, to }) => {
  const classes = useStyles()
  const fixedProps = {
    size: 'large',
    variant: 'contained',
    color: 'primary',
    component: to ? RouterLink : 'a',
    className: classes.listItemButton,
    to,
    onClick,
    href,
  }
  return (
    <Button {...fixedProps}>{children}</Button>
  )
}

CTAButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  href: PropTypes.string,
  to: PropTypes.string,
}
