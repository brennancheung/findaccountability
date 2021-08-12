import { useHistory } from 'react-router-dom'

export const useNavTo = url => {
  const history = useHistory()
  return () => history.push(url)
}
