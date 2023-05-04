import CartSummary from '../../features/CartSummary/CartSummary';
import { useSelector, useDispatch } from 'react-redux';
import {
  getOrders,
  getOrdersProduct,
  postOrderRequest,
  addUserinfoToOrder,
} from '../../../redux/orderRedux';
import Button from 'react-bootstrap/esm/Button';
import { useState, useEffect } from 'react';

const Summary = () => {
  const products = useSelector(getOrdersProduct);
  const order = useSelector(getOrders);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [totalCost, setTotalCost] = useState('');

  useEffect(() => {
    setTotalCost(
      products.reduce(
        (acc, product) => acc + product.orderedAmount * product.price,
        0,
      ),
    );
  }, [products]);

  useEffect(() => {
    const userinfo = { name, address, email, phone, totalCost };
    dispatch(addUserinfoToOrder(userinfo));
  }, [dispatch, name, address, email, phone, totalCost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postOrderRequest(order));
  };

  if (!products || products.length === 0) {
    return <div className="container">There are no products in your cart</div>;
  } else {
    return (
      <>
        <div>
          <h2> Your order:</h2>
          {products.map((product) => {
            return (
              <CartSummary
                editable={false}
                key={product.productId}
                {...product}
              ></CartSummary>
            );
          })}
        </div>
        <div>Total order cost: {totalCost}</div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="address">Address: </label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>
          <Button type="submit">Order</Button>
        </form>
      </>
    );
  }
};

export default Summary;
