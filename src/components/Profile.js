import React, { useEffect, useState } from 'react'
import { Button, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useFSDoc } from '../firebase/firebase-utils'

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2),
  },

  textfield: {
    marginTop: theme.spacing(4),
  },
}))

const Profile = () => {
  const [about, setAbout] = useState('')
  let profile = useFSDoc(uid => `/profiles/${uid}`)
  const handleSave = () => {
    profile.set({ about }, { merge: true })
  }
  useEffect(() => {
    profile.get().then(doc => setAbout(doc.data().about))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const classes = useStyles()

  return (
    <div>
      <Typography variant="body1">
        Congratulations on becoming part of the community.
        Please tell use a little about yourself and what your vision is.
      </Typography>
      <TextField
        className={classes.textfield}
        variant="outlined"
        multiline
        autoFocus
        placeholder="Tell us about yourself"
        fullWidth
        rows={4}
        value={about}
        onChange={e => setAbout(e.target.value)}
      />
      <Button onClick={handleSave} className={classes.button} variant="contained" color="primary">Save</Button>
    </div>
  )
}

export default Profile
