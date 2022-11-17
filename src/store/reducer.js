import * as actionTypes from "./constant";

const initialState = {
  counter: 100,
  banners: [],
  recommend: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case actionTypes.SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case actionTypes.CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case actionTypes.CHANGE_RECOMMEND:
      return { ...state, recommend: action.recommend };
    default:
      return state;
  }
}

export default reducer;
