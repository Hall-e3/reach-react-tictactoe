import { ActionTypes } from "./types";
import { loadStdlib } from "@reach-sh/stdlib";
const reach = loadStdlib("ETH");
export const get_account_address = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.GET_META_MASK_ACCOUNT_LOADING,
  });
  try {
    const accounts = await reach.getDefaultAccount();
    dispatch({
      type: ActionTypes.GET_META_MASK_ACCOUNT_SUCCESS,
      payload: accounts,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_META_MASK_ACCOUNT_FAIL,
      payload: error,
    });
  }
};
