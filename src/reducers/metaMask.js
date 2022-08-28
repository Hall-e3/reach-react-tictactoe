import { ActionTypes } from "../actions/types";

const initialState = {
  meta_mask_loading: false,
  wallet: null,
  success: false,
  error: null,
};

export default function metaMask(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_META_MASK_ACCOUNT_LOADING:
      return {
        ...state,
        meta_mask_loading: true,
      };
    case ActionTypes.GET_META_MASK_ACCOUNT_SUCCESS:
      return {
        ...state,
        wallet: action.payload,
        success: true,
        meta_mask_loading: false,
      };

    case ActionTypes.GET_META_MASK_ACCOUNT_FAIL:
      return {
        ...state,
        meta_mask_loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
