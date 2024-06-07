import { useEffect, useState } from 'react'
import './App.css'
import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState('')
  // Automatically expand the app
  useEffect(() => {
    WebApp.expand()
    try {
      const decoded: any = JSON.parse(decodeURIComponent(WebApp.initData).split('&auth_date')[0].split('&user=')[1])
      setUsername(decoded.first_name)
    } catch (e: any) {
      setUsername(e.message)
      console.log(e)
    }
  }, [])
  return (
    <>
      <h1>800A!</h1>
      {/* Here we add our button with alert callback */}
      <div className="card">
        Hello {username}!<br></br><br></br>
        <button onClick={() => { WebApp.HapticFeedback.impactOccurred('heavy'); setCount(count + 1) }}>
          SUCA {count} VOLTE!
        </button>
      </div>
    </>
  )
}

export default App
