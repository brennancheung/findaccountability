import { useEffect, useState } from 'react'
import firebase from 'firebase/app'

const db = firebase.firestore()

// 'ready' is used as a workaround since 'useFsCollection' will need to be called
// even when something like the userId is not ready yet.  The 'ready' flag still
// allows the hooks to be called in order but allows for skipping any action
// until all the data are ready to fetch the collection
const useFsCollection = (path, ready=true) => {
  const [items, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const updateDoc = (items, options = { merge: true }) => {
    db.doc(path).set(items, options)
  }

  useEffect(() => {
    if (!path && ready) return
    setLoading(true)
    const unsubscribe = db.collection(path).onSnapshot(qs => {
      const items = qs.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setLoading(false)
      setError(false)
      setData(items)
    })
    return unsubscribe
  }, [path, ready])

  return [items, { updateDoc, loading, error }]
}

export default useFsCollection
