// @flow

import {
  GET_ALL_COIN_MARKET,
  GET_ALL_COIN_MARKET_SUCCESS,
  GET_ALL_COIN_MARKET_ERROR,
} from '../actions/entities.js';

const initialState = {
  coins: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COIN_MARKET_SUCCESS:
      return {
        ...state,
        coins: action.data,
      };
    default:
      return state;
  }
};
