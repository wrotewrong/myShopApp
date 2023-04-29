/* SELECTORS */

export const getOrders = ({ orders }) => orders;

export const getOrderById = ({ orders }, id) =>
  orders.dataSingle.find((order) => order.id === id);

/* ACTIONS */
const createActionName = (actionName) => `app/order/${actionName}`;
export const CREATE_ORDER = createActionName('CREATE_ORDER');
export const ADD_PRODUCT_TO_ORDER = createActionName('ADD_PRODUCT_TO_ORDER');
export const EDIT_ORDER = createActionName('EDIT_ORDER');
export const POST_ORDER = createActionName('POST_ORDER');

/* ACTION CREATORS */

export const createOrder = (payload) => ({
  payload,
  type: CREATE_ORDER,
});
export const addProductToOrder = (payload) => ({
  payload,
  type: ADD_PRODUCT_TO_ORDER,
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

const postOrderRequest = () => {};

/* INITIAL STATE */

const initialState = {
  // userId: 'e519219b-6b62-49a9-9130-5da1be0057ba',
  // products: [
  //   {
  //     name: 'Orange Tshirt',
  //     price: 149,
  //     orderedAmount: 1,
  //     details: 'XL',
  //     productId: 'd8e661b5-e5a3-42ba-ae24-475a6f1c9b79',
  //   },
  //   {
  //     name: 'Black Jeans',
  //     price: 149,
  //     orderedAmount: 1,
  //     details: 'M',
  //     productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
  //   },
  // ],
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case CREATE_ORDER:
      return { userId: 'e519219b-6b62-49a9-9130-5da1be0057ba', products: [] };
    case ADD_PRODUCT_TO_ORDER:
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    case EDIT_ORDER:
      return;
    case POST_ORDER:
      return;
    default:
      return statePart;
  }
}
