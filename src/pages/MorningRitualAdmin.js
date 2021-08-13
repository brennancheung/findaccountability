import React, { useState } from 'react'
import { useFsUserCollection } from '../hooks/useFsUserCollection'
import { makeStyles } from '@material-ui/styles'
// import { DataGrid } from '@material-ui/data-grid'
import { Button, Container, List, ListItem, ListItemText, TextField, Typography } from '@material-ui/core'
import { wrapEventValue } from '../util'
import { useAuth } from '../hooks/useAuth'

/*
const columnDefs = [
  { field: 'name', headerName: 'Name', width: 150 },
]
*/

const useStyles = makeStyles(theme => ({
  root: {
    height: 400,
  },
}))

// Schema:
/*
MRDefs:
  - id
  - name
  - uid
  - rank

MRItems:
  - id
  - defId
  - uid
  - completed
*/

export const MorningRitualAdmin = () => {
  const { user } = useAuth()
  const [defs, { collection, loading }] = useFsUserCollection('/MRDefs')
  const [name, setName] = useState('')
  const [rank, setRank] = useState(10)
  const classes = useStyles()

  const showList = defs != null && !loading

  const renderListItem = def => (
    <ListItem key={def.id}>
      <ListItemText>{def.name}</ListItemText>
    </ListItem>
  )

  const handleSubmit = () => {
    console.log('About to submit with: ', name, rank)
    if (!collection?.add) return console.error('User collection /MRDefs not current available')
    collection.add({ uid: user.uid, name, rank })
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5">Configure Morning Ritual</Typography>

      {!loading && <pre>{JSON.stringify(defs, null, 4)}</pre>}

      {showList &&
        <List>
          {defs.map(renderListItem)}
        </List>
      }

      <Typography variant="h6">Add a new item</Typography>
      <Container>
        <form noValidate autoComplete="off">
          <div><TextField label="Name" value={name} onChange={wrapEventValue(setName)} /></div>
          <div><TextField label="Rank" value={rank} onChange={wrapEventValue(setRank)} type="number" /></div>
          <div><Button variant="contained" color="primary" onClick={handleSubmit}>Add item</Button></div>
        </form>
      </Container>
    </div>
  )
}
