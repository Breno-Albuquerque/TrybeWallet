import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  state = {
    coinsList: undefined,
  }

  async componentDidMount() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const coinsData = await response.json();
    delete coinsData.USDT;
    const values = Object.values(coinsData);
    const coinsList = values.map((item) => item.code);

    this.setState({
      coinsList,
    });
  }

  render() {
    const { coinsList } = this.state;

    return (
      <>
        <Header />
        <Form coinsList={ coinsList } />
      </>
    );
  }
}

export default Wallet;
