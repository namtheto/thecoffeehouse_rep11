import { getCategory } from '../services/Api'
const initState = {
  categorys: [],
  productDetail: null
};
export const getCategorys = (params) => async (dispatch) => {
  const result = await getCategory(params);
  dispatch({ type: "GET_CATEGORY", category: result?.data });
};
export default function categoryReducer(state = initState, action) {
  switch (action.type) {
    case "GET_CATEGORY":
      return {
        ...state,
        categorys: action.category
      };

    default:
      return state;
  }
}
