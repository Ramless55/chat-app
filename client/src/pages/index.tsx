import { useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:5000')

export default function Home() {

  const [message, setMessage] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(message)
  }

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setMessage(e.target.value)}/>
        <button>Enviar</button>
      </form>
    </div>
    </>
  )
}
