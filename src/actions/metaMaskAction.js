import { ActionTypes } from "./types";

export const get_account_address = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.GET_META_MASK_ACCOUNT_LOADING,
  });
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    dispatch({
      type: ActionTypes.GET_META_MASK_ACCOUNT_SUCCESS,
      payload: account,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_META_MASK_ACCOUNT_FAIL,
      payload: error,
    });
  }
};
