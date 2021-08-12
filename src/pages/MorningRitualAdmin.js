import React from 'react'
import { useFsUserCollection } from '../hooks/useFsUserCollection'
import { makeStyles } from '@material-ui/styles'
import { DataGrid } from '@material-ui/data-grid'

const columnDefs = [
  { field: 'name', headerName: 'Name', width: 150 },
]

const useStyles = makeStyles(theme => ({
  root: {
    height: 400,
  },
}))

export const MorningRitualAdmin = () => {
  const [defs, { loading }] = useFsUserCollection('/MRDefs')
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1>Configure Morning Ritual</h1>

      <h2>Read list of items</h2>
      {!loading && <pre>{JSON.stringify(defs, null, 4)}</pre>}

      <h2>Table with list of items</h2>
      {defs != null && !loading && <DataGrid columns={columnDefs} rows={defs} />}
    </div>
  )
}
