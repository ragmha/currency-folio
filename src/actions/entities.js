// @flow

import { CoinMarket } from '../utils/api';
import type { CoinMarketCapData } from '../types';

export const GET_ALL_COIN_MARKET = 'GET_ALL_COIN_MARKET';
export const GET_ALL_COIN_MARKET_SUCCESS = 'GET_ALL_COIN_MARKET_SUCCESS';
export const GET_ALL_COIN_MARKET_ERROR = 'GET_ALL_COIN_MARKET_ERROR';

function getAllCoinMarketSuccess(data: CoinMarketCapData) {
  return {
    type: GET_ALL_COIN_MARKET_SUCCESS,
    data,
  };
}
function getAllCoinMarketError(error: Error) {
  return {
    type: GET_ALL_COIN_MARKET_ERROR,
    error,
  };
}

export function getAllCoinMarket() {
  return async (dispatch: Function) => {
    dispatch({ type: GET_ALL_COIN_MARKET });
    try {
      const { data } = await CoinMarket.getAll(10);
      return dispatch(getAllCoinMarketSuccess(data));
    } catch (error) {
      dispatch(getAllCoinMarketError(error));
    }
  };
}
