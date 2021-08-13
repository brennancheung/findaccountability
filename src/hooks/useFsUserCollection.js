import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import { useAuth } from './useAuth'

const db = firebase.firestore()

export const useFsUserCollection = (path) => {
  const { user } = useAuth()
  const [items, setData] = useState(null)
  const [collection, setCollection] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const updateDoc = (items, options = { merge: true }) => {
    db.doc(path).set(items, options)
  }

  useEffect(() => {
    if (!path || !user) return
    setLoading(true)
    const fullPath = `/users/${user.uid}${path}`
    setCollection(db.collection(fullPath))
    const unsubscribe = db.collection(fullPath).onSnapshot(qs => {
      const items = qs.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setLoading(false)
      setError(false)
      setData(items)
    })
    return unsubscribe
  }, [path, user])

  return [items, { collection, updateDoc, loading, error }]
}
