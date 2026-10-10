import { products } from '../data/products';

type OrderSummaryProps = {
  totalCases: number;
  orderQuantities: Record<number, number>;
  orderSubmitted: boolean;
  setOrderSubmitted: (submitted: boolean) => void;
};

function OrderSummary({
  totalCases,
  orderQuantities,
  orderSubmitted,
  setOrderSubmitted,
}: OrderSummaryProps) {
  const orderedProducts = products.filter(
    (product) => (orderQuantities[product.id] ?? 0) > 0,
  );

  return (
    <main>
      <h1>Order Summary</h1>
      {orderedProducts.map((product) => (
        <p key={product.id}>
          {product.name} - {orderQuantities[product.id]} cases
        </p>
      ))}
      <p>Total Cases: {totalCases}</p>
      {!orderSubmitted && (
        <button onClick={() => setOrderSubmitted(true)}>Submit Order</button>
      )}
      {orderSubmitted && <h3>Order Submitted!</h3>}
    </main>
  );
}

export default OrderSummary;
