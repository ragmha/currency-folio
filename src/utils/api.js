// @flow

import axios from 'axios';

class CoinmarketApi {
  baseURL: string;

  constructor() {
    this.baseURL = 'https://api.coinmarketcap.com/v1/';
  }

  async getAll(limit: number = 100) {
    return axios.get(`${this.baseURL}ticker/?limit=${limit}`);
  }
}

export const CoinMarket = new CoinmarketApi();
