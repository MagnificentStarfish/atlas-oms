import { useState } from 'react';
import { stores, type Store } from './data/stores';
import { calculateMerchandisingPriority } from './utils/merchandising';
import { sortStoresByMerchandisingPriority } from './utils/merchandising';
import { products } from './data/products';


function App() {
  const [role, setRole] = useState('');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

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

  if (selectedStore === null) {
    const sortedStores = sortStoresByMerchandisingPriority(stores);

    return (
      <main>
        <h1>{role} Dashboard</h1>

        <ul>
          {sortedStores.map((store) => (
            <li key={store.id}>
              <button onClick={() => setSelectedStore(store)}>
                {store.name} - Priority:
                {calculateMerchandisingPriority(store)}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => setRole('')}>Back</button>
      </main>
    );
  }

  return (
    <main>
      <h1>{selectedStore.name}</h1>
      <p>
        Selected Store: {selectedStore.name} / {selectedStore.city}
      </p>
      <p>Volume Score: {selectedStore.volumeScore}/10</p>
      <p>Delivery Start Time: {selectedStore.deliveryWindowStart}</p>
      <p>Delivery End Time: {selectedStore.deliveryWindowEnd}</p>
      <p>
        Merchandising priority: {calculateMerchandisingPriority(selectedStore)}
      </p>
      <h2>Products</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.sizeLabel} - Case Pack: {product.casePack}
          </li>
        ))}
      </ul>
      <button onClick={() => setSelectedStore(null)}>Back to route</button>
    </main>
  );
}

export default App;
