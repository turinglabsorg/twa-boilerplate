import { useEffect, useState } from 'react'
import './App.css'
import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)
  // Automatically expand the app
  useEffect(() => {
    WebApp.expand()
  }, [])
  return (
    <>
      <h1>Turinglabs Mini App</h1>
      {/* Here we add our button with alert callback */}
      <div className="card">
        <button onClick={() => { WebApp.HapticFeedback.impactOccurred('heavy'); setCount(count + 1) }}>
          SUCA {count} VOLTE!
        </button><br></br>
        <button onClick={() => { WebApp.showScanQrPopup({ text: "SCAN" }) }}>
          SCAN QR
        </button>
      </div>
    </>
  )
}

export default App
