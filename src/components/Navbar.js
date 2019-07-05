import React, { useContext, useState } from 'react'
import classnames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MyLocationIcon from '@material-ui/icons/MyLocation'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import NavItems from './NavItems'
import { AppContext } from '../App'
import { makeStyles } from '@material-ui/styles'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing(2),
  },
  avatar: {
    marginLeft: 10,
  },
  navRightItems: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
  },
  icon: {
    marginRight: theme.spacing(2),
  }
}))

const Navbar = ({ children }) => {
  const context = useContext(AppContext)
  const { handleSignIn, handleSignOut, user } = context
  const [open, setOpen] = useState(true)
  const classes = useStyles()

  const handleDrawerOpen = () => { setOpen(true) }
  const handleDrawerClose = () => { setOpen(false) }

  const renderUser = () => (
    <div className={classes.navRightItems}>
      <IconButton color="inherit">
        <Badge badgeContent={0} color="secondary" className={classes.badge}>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <div>
        <Button color="inherit" onClick={handleSignOut}>
          <Avatar alt={user.displayName} src={user.photoURL} className={classes.avatar} />
        </Button>
      </div>
    </div>
  )

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="absolute" className={classnames(classes.appBar, open && classes.appBarShift)}>
          <Toolbar disableGutters={!open} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={handleDrawerOpen}
              className={classnames(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <MyLocationIcon className={classes.icon} />
            <Typography component="h1" variant="h6" color="inherit" className={classes.title}>
              Find Accountability
            </Typography>
            {user && renderUser()}
            {!user && <Button color="inherit" onClick={handleSignIn}>Sign in</Button>}
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          classes={{ paper: classnames(classes.drawerPaper, !open && classes.drawerPaperClose) }}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <NavItems />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          {children}
        </main>
      </div>
    </React.Fragment>
  )
}

export default Navbar
