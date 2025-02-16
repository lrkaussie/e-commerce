import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<any>({});

  useEffect(() => {
    const fetchCart = async () => {
      const response = await axios.get('/api/cart/view');
      setCart(response.data.cart);
    };
    fetchCart();
  }, []);

  const addItem = async (productId: string) => {
    await axios.post('/api/cart/add', { product_id: productId, quantity: 1 });
    fetchCart();
  };

  const removeItem = async (productId: string) => {
    await axios.delete('/api/cart/remove', { data: { product_id: productId } });
    fetchCart();
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {Object.entries(cart).map(([productId, quantity]: [string, number]) => (
          <li key={productId}>
            <p>Product ID: {productId}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => addItem(productId)}>Add</button>
            <button onClick={() => removeItem(productId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage; 