import Button from 'react-bootstrap/Button'
import api from '../../services/api'
import react from 'react'

export default function Home() {

  async function getHelloWorld() {
    const response = await api.get('/api/hello')
    return response.data
  }

  return (
    <div onClick={() => getHelloWorld()}>
      Clique aqui para testar123!
    </div>
  )
}