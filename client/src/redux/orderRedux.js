import { API_URL } from '../config';
/* SELECTORS */

export const getOrders = ({ orders }) => orders;

export const getOrdersProduct = ({ orders }) => orders.products;

export const getOrderById = ({ orders }, id) =>
  orders.dataSingle.find((order) => order.id === id);

/* ACTIONS */
const createActionName = (actionName) => `app/order/${actionName}`;
// export const CREATE_ORDER = createActionName('CREATE_ORDER');
export const ADD_PRODUCT_TO_ORDER = createActionName('ADD_PRODUCT_TO_ORDER');
export const REMOVE_PRODUCT_FROM_ORDER = createActionName(
  'REMOVE_PRODUCT_FROM_ORDER',
);
export const EDIT_ORDER = createActionName('EDIT_ORDER');
export const POST_ORDER = createActionName('POST_ORDER');

/* ACTION CREATORS */

// export const createOrder = (payload) => ({
//   payload,
//   type: CREATE_ORDER,
// });
export const addProductToOrder = (payload) => ({
  payload,
  type: ADD_PRODUCT_TO_ORDER,
});
export const removeProductFromOrder = (payload) => ({
  payload,
  type: REMOVE_PRODUCT_FROM_ORDER,
});
export const editOrder = (payload) => ({
  payload,
  type: EDIT_ORDER,
});
export const postOrder = (payload) => ({
  payload,
  type: POST_ORDER,
});

/* THUNKS */

export const postOrderRequest = (order) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    };

    fetch(`${API_URL}/orders`, options).then((res) => {
      if (res.status === 201) {
        alert('Your order has been sent!');
      }
    });
  };
};

/* INITIAL STATE */

const initialState = localStorage.getItem('cartProducts')
  ? { products: JSON.parse(localStorage.getItem('cartProducts')) }
  : { products: [] };

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    // case CREATE_ORDER:
    //   return { userId: 'e519219b-6b62-49a9-9130-5da1be0057ba', products: [] };
    case ADD_PRODUCT_TO_ORDER:
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    case REMOVE_PRODUCT_FROM_ORDER:
      return {
        ...statePart,
        products: statePart.products.filter(
          (product) => product.productId !== action.payload,
        ),
      };
    case EDIT_ORDER:
      return {
        ...statePart,
        products: statePart.products.map((product) =>
          product.productId === action.payload.productId
            ? { ...product, ...action.payload }
            : product,
        ),
      };
    case POST_ORDER:
      return;
    default:
      return statePart;
  }
}
