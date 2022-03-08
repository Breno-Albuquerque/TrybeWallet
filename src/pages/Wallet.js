import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import { saveCurrencies } from '../actions';
import './Wallet.css';

class Wallet extends React.Component {
  async componentDidMount() {
    const { saveCurrenciesList } = this.props;

    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const coinsData = await response.json();
    delete coinsData.USDT;
    const values = Object.values(coinsData);
    const coinsList = values.map((item) => item.code);

    saveCurrenciesList(coinsList);
  }

  render() {
    return (
      <main className="wallet-container">
        <Header />
        <div className="tableAndForm-components-container">
          <Form />
          <Table />
        </div>

      </main>
    );
  }
}

Wallet.propTypes = {
  saveCurrenciesList: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveCurrenciesList: (currenciesArr) => dispatch(saveCurrencies(currenciesArr)),
});

export default connect(null, mapDispatchToProps)(Wallet);
