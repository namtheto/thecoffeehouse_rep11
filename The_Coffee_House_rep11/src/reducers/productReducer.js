import { getProduct } from '../services/Api'
const initState = {
  products: [],
};
export const getProducts = (params) => async (dispatch) => {
  const result = await getProduct(params);
  dispatch({ type: "GET_PRODUCT", product: result?.data.data });
};
export default function productReducer(state = initState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        products: action.product
      };

    default:
      return state;
  }
}
