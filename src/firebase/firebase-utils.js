import { useContext } from 'react'
import { AppContext } from '../App'

export const useFirebase = () => useContext(AppContext).firebase
export const useFirestore = () => useFirebase().firestore()

export const useFSCollection = fn => {
  const uid = useContext(AppContext).user.uid
  return useFirestore().collection(fn(uid))
}

export const useFSDoc = fn => {
  const uid = useContext(AppContext).user.uid
  return useFirestore().doc(fn(uid))
}
