import { useState } from 'react';

type Store = {
  id: number
  name: string
  city: string
  volumeScore: number
}

const stores: Store[] = [
  {id: 1,
    name: 'Fred Meyer #265',
    city: 'Puyallup',
    volumeScore: 8,
  },
  {id: 2,
    name: 'Walmart #3705',
    city: 'Yelm',
    volumeScore: 7,
  },
  {id: 3,
    name: 'Target #30',
    city: 'Federal Way',
    volumeScore: 5,
  }
]

function App() {
  const [role, setRole] = useState('');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null)

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

  if (selectedStore !== null) {
    return (
      <main>
        <h1>{selectedStore.name}</h1>
        <p>Selected Store: {selectedStore.name} / {selectedStore.city}</p>
        <p>Volume Score: {selectedStore.volumeScore}/10</p>
        <button onClick={() => setSelectedStore(null)}>Back to route</button>
      </main>
    )
  }

  return (
    <main>
      <h1>{role} Dashboard</h1>
      <ul>
        {stores.map((store) => (
          <li key={store.id}>
            <button onClick={() => setSelectedStore(store)}>{store.name}</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setRole('')}>Back</button>
    </main>
  );
}

export default App;
