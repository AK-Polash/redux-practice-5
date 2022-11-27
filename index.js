let { createStore, combineReducers } = require("redux");
let GET_PRODUCTS = "GET_PRODUCTS";
let ADD_PRODUCT = "ADD_PRODUCT";
let GET_CART = "GET_CART";
let ADD_CART = "ADD_CART";

// States:
// Product State:
let productState = {
  count: 1,
  products: ["Pen"],
};

// Cart State:
let cartState = {
  number: 2,
  cart: ["Monitor", "Keyboard"],
};

// Actions:
let getProductAction = () => {
  return {
    type: GET_PRODUCTS,
  };
};

let addProductAction = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

let getCartAction = () => {
  return {
    type: GET_CART,
  };
};

let addCartAction = (value) => {
  return {
    type: ADD_CART,
    payload: value,
  };
};

// Reducer:
// Product Reducer:
let productReducer = (state = productState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCT:
      return {
        count: state.count + 1,
        products: [...state.products, action.payload],
      };

    default:
      return state;
  }
};

// Cart Reducer:
let cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
      };

    case ADD_CART:
      return {
        number: state.number + 1,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

// Note: we can't store multiple Reducer in a single Store without combining them, it's a redux defalut function.
let rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

// Store:
let store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch actions:
store.dispatch(getProductAction());
store.dispatch(addProductAction("Paper"));
store.dispatch(addProductAction("Book"));

store.dispatch(getCartAction());
store.dispatch(addCartAction("Mouse"));
store.dispatch(addCartAction("Chair"));
