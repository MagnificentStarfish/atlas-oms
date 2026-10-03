import { useState } from 'react'

function App() {
  const [role, setRole] = useState('')

  return (
    <main>
      <h1>Atlas OMS TESTzingzang</h1>
      <p>Ordering & Merchandising System</p>

      <h2>Select your role</h2>

      <button onClick={() => setRole('Salesperson')}>Salesperson</button>
      <button onClick={() => setRole('Merchandiser')}>Merchandiser</button>
      <button onClick={() => setRole('Supervisor')}>Supervisor</button>

      <p>Selected role: {role}</p>
    </main>
  )
}

export default App;