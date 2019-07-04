import React, { useContext } from 'react'
import { AppContext } from '../App'
import MyLocationIcon from '@material-ui/icons/MyLocation'
import { AppBar, Button, CssBaseline, Grid, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing(8)}px 0 ${theme.spacing(6)}px`,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(1100 + theme.spacing(6))]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}))

const Login = () => {
  const classes = useStyles()
  const context = useContext(AppContext)
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <MyLocationIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            FindAccountability
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Find Accountability
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Find accountability partners.<br />
              Track your progress.<br />
              Set daily, weekly, monthly, and yearly goals.<br />
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={4} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={context.handleSignIn}>
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default Login
