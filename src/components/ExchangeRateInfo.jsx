import styles from './ExchangeRateInfo.module.css';

function ExchangeRateInfo({ rate }) {
    return <p className={styles.rate}>Exchange rate: {rate.toFixed(5)} </p>;
  }
  
  export default ExchangeRateInfo;
  