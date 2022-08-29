import { ActionTypes } from "./types";
import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "../build/index.main.mjs";
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

export const set_contract_info = (wallet, wager) => async (dispatch) => {
  dispatch({
    type: ActionTypes.SET_CONTRACT_INFO_LOADING,
  });
  try {
    const ctcPlayerX = wallet.contract(backend);
    const ctcPlayerO = wallet.contract(backend, ctcPlayerX.getInfo());
    await Promise.all([
      backend.Deployer(ctcPlayerX, {
        wager: reach.parseCurrency(wager),
        ready: async () => {
          const info = await ctcPlayerX.getInfo();
          dispatch({
            type: ActionTypes.SET_CONTRACT_INFO_SUCCESS,
            payload: info,
          });
          throw 42;
        },
      }),
    ]);
  } catch (error) {
    dispatch({
      type: ActionTypes.SET_CONTRACT_INFO_FAIL,
      payload: error,
    });
  }
};

export const accept_wager = (wallet, playerInfo) => async (dispatch) => {
  dispatch({
    type: ActionTypes.ACCEPT_WAGER_LOADING,
  });
  try {
    const ctc = wallet.contract(backend, playerInfo);
    const acceptedData = await ctc.apis.Players.acceptWager();
    dispatch({
      type: ActionTypes.ACCEPT_WAGER_SUCCESS,
      payload: acceptedData,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.ACCEPT_WAGER_FAIL,
      payload: error,
    });
  }
};


