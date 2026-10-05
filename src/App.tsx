import { useState } from 'react';

type Store = {
  id: number
  name: string
  city: string
  volumeScore: number
  deliveryWindowStart: string
  deliveryWindowEnd: string
}

const stores: Store[] = [
  {id: 1,
    name: 'Dollar Tree #9595',
    city: 'Bremerton',
    volumeScore: 2,
    deliveryWindowStart: '11:00',
    deliveryWindowEnd: '15:00'
  },

  {id: 2,
    name: 'Fred Meyer #265',
    city: 'Puyallup',
    volumeScore: 8,
    deliveryWindowStart: '19:00',
    deliveryWindowEnd: '23:00',
  },
  {id: 3,
    name: 'Walmart #3705',
    city: 'Yelm',
    volumeScore: 7,
    deliveryWindowStart: '04:00',
    deliveryWindowEnd: '08:00',
  },
  {id: 4,
    name: 'Target #30',
    city: 'Federal Way',
    volumeScore: 5,
    deliveryWindowStart: '08:00',
    deliveryWindowEnd: '12:00'
  }
]

function calculateMerchandisingPriority(store: Store) {
  let deliveryBonus = 0

  if (store.deliveryWindowStart >= '18:00') {
    deliveryBonus = 10
  } else if (store.deliveryWindowStart < '08:00') {
    deliveryBonus = 5
  }

  return store.volumeScore + deliveryBonus
}


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
        <p>Delivery Start Time: {selectedStore.deliveryWindowStart}</p>
        <p>Delivery End Time: {selectedStore.deliveryWindowEnd}</p>
        <p>Merchandising priority: {calculateMerchandisingPriority(selectedStore)}</p>
        <button onClick={() => setSelectedStore(null)}>Back to route</button>
      </main>
    )
  }

  const sortedStores = [...stores].sort((a,b) => calculateMerchandisingPriority(b) - calculateMerchandisingPriority(a))

  return (
    <main>
      <h1>{role} Dashboard</h1>
      <ul>
        {sortedStores.map((store) => (
          <li key={store.id}>
            <button onClick={() => setSelectedStore(store)}>
              {store.name} - Priority: {calculateMerchandisingPriority(store)}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => setRole('')}>Back</button>
    </main>
  );
}

export default App;
