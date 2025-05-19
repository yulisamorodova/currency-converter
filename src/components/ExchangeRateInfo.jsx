import styles from './ExchangeRateInfo.module.css';

function ExchangeRateInfo({ rate }) {
    return <p>Exchange rate: {rate.toFixed(5)} </p>;
  }
  
  export default ExchangeRateInfo;
  