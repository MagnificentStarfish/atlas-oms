import { useState } from 'react';
const stores = ['Fred Meyer', 'Walmart', 'Target', 'Safeway'];

function App() {
  const [role, setRole] = useState('');
  const [selectedStore, setSelectedStore] = useState('');

  if (role === '') {
    return (
      <main>
        <h1>Atlas OMS</h1>
        <p>Ordering & Merchandising System</p>

        <h2>Select your role</h2>

        <button onClick={() => setRole('Salesperson')}>Salesperson</button>
        <button onClick={() => setRole('Merchandiser')}>Merchandiser</button>
        <button onClick={() => setRole('Supervisor')}>Supervisor</button>
      </main>
    );
  }

  if (selectedStore !== '') {
    return (
      <main>
        <h1>{selectedStore}</h1>
        <p>Store details will go here. </p>

        <button onClick={() => setSelectedStore('')}>Back to route</button>
      </main>
    )
  }

  return (
    <main>
      <h1>{role} Dashboard</h1>
      <ul>
        {stores.map((store) => (
          <li key={store}>
            <button onClick={() => setSelectedStore(store)}>{store}</button>
          </li>
        ))}
      </ul>
      <p>Selected store: {selectedStore}</p>
      <button onClick={() => setRole('')}>Back</button>
    </main>
  );
}

export default App;
