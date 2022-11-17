import * as actionTypes from "./constant";

export const addNumberAction = (num) => ({
  type: actionTypes.ADD_NUMBER,
  num,
});
export const subNumberAction = (num) => ({
  type: actionTypes.SUB_NUMBER,
  num,
});

export const changeBannersAction = (banners) => ({
  type: actionTypes.CHANGE_BANNERS,
  banners,
});
export const changeRecommendAction = (recommend) => ({
  type: actionTypes.CHANGE_RECOMMEND,
  recommend,
});
