// @flow

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { getAllCoinMarket } from '../../actions/entities';
import Loading from '../../components/Loading';
import Coin from './Coin';

import type { CoinMarketCapData } from '../../types';

const Root = styled.View`flex: 1;`;

const Separator = styled.View`
  height: 2;
  backgroundColor: transparent;
`;

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getAllCoinMarket();
  }

  _renderItem = ({ item }: { item: CoinMarketCapData }) => <Coin data={item} />;

  render() {
    if (this.props.coins.length === 0) {
      return <Loading />;
    }

    return (
      <Root>
        <FlatList
          ItemSeparatorComponent={() => <Separator />}
          contentContainerStyle={{ alignSelf: 'stretch' }}
          keyExtractor={item => item.id}
          renderItem={this._renderItem}
          data={this.props.coins}
        />
      </Root>
    );
  }
}

export default connect(({ entities }) => ({ coins: entities.coins }), {
  getAllCoinMarket,
})(HomeScreen);
