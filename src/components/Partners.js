import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'
// import { makeStyles } from '@material-ui/styles'
import { useFSCollection } from '../firebase/firebase-utils'

// const useStyles = makeStyles(theme => ({ }))

const Profile = profile => <pre>{JSON.stringify(profile, null, 4)}</pre>

const Partners = () => {
  const [profiles, setProfiles] = useState([])
  let collection = useFSCollection(uid => `/profiles`)
  useEffect(() => {
    collection
      .get()
      .then(snapshot => snapshot.docs.map(x => x.data()))
      .then(setProfiles)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // const classes = useStyles()

  return (
    <div>
      <Typography variant="body1">
        Here are some people in the community.  Reach out to those you feel would
        be a good fit.
      </Typography>
      {profiles.map(profile => <Profile key={profile} profile={profile} />)}
    </div>
  )
}

export default Partners
