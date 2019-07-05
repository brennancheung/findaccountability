import { useContext } from 'react'
import { AppContext } from '../App'

export const useFirebase = () => useContext(AppContext).firebase
export const useFirestore = () => useFirebase().firestore()

export const useFSCollection = path => {
  const uid = useContext(AppContext).user.uid
  const firebase = useFirebase()
  return fn => firebase.collection(fn(uid))
}

export const useFSDoc = fn => {
  const uid = useContext(AppContext).user.uid
  return useFirestore().doc(fn(uid))
}
