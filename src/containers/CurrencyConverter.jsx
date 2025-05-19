import { useState, useEffect } from 'react';
import CurrencyInput from '../components/CurrencyInput';
import ExchangeRateInfo from '../components/ExchangeRateInfo';
import SendButton from '../components/SendButton';
import { getExchangeRate } from '../utils/exchangeRates';
import { formatNumber, parseInput } from '../utils/formatting';
import styles from './CurrencyConverter.module.css';

function CurrencyConverter() {
  const [amountSend, setAmountSend] = useState('1000');
  const [amountReceive, setAmountReceive] = useState('');
  const [fromCurrency, setFromCurrency] = useState('GBP');
  const [toCurrency, setToCurrency] = useState('PLN');
  const [lastChanged, setLastChanged] = useState('send');

  const exchangeRate = getExchangeRate(fromCurrency, toCurrency);

  // 🔁 Пересчёт при загрузке или смене валют
  useEffect(() => {
    if (!amountSend || isNaN(amountSend)) return;
    const converted = parseFloat(amountSend) * exchangeRate;
    setAmountReceive(isNaN(converted) ? '' : converted.toFixed(2));
  }, [fromCurrency, toCurrency]);

  const handleSendChange = (e) => {
    const raw = parseInput(e.target.value);
    setAmountSend(raw);
    setLastChanged('send');
    const converted = parseFloat(raw) * exchangeRate;
    setAmountReceive(isNaN(converted) ? '' : converted.toFixed(2));
  };

  const handleReceiveChange = (e) => {
    const raw = parseInput(e.target.value);
    setAmountReceive(raw);
    setLastChanged('receive');
    const converted = parseFloat(raw) / exchangeRate;
    setAmountSend(isNaN(converted) ? '' : converted.toFixed(2));
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
    const rate = getExchangeRate(e.target.value, toCurrency);
    if (lastChanged === 'send') {
      const converted = parseFloat(amountSend) * rate;
      setAmountReceive(isNaN(converted) ? '' : converted.toFixed(2));
    } else {
      const converted = parseFloat(amountReceive) / rate;
      setAmountSend(isNaN(converted) ? '' : converted.toFixed(2));
    }
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
    const rate = getExchangeRate(fromCurrency, e.target.value);
    if (lastChanged === 'send') {
      const converted = parseFloat(amountSend) * rate;
      setAmountReceive(isNaN(converted) ? '' : converted.toFixed(2));
    } else {
      const converted = parseFloat(amountReceive) / rate;
      setAmountSend(isNaN(converted) ? '' : converted.toFixed(2));
    }
  };

  return (
    <div className={styles.wrapper}>
      <CurrencyInput
        label="You send:"
        value={formatNumber(amountSend)}
        currency={fromCurrency}
        onChange={handleSendChange}
        onCurrencyChange={handleFromCurrencyChange}
        placeholder="0.00"
      />
      <CurrencyInput
        label="Recipient gets:"
        value={formatNumber(amountReceive)}
        currency={toCurrency}
        onChange={handleReceiveChange}
        onCurrencyChange={handleToCurrencyChange}
        placeholder="0.00"
      />
      <ExchangeRateInfo rate={exchangeRate} />
      <SendButton
  onClick={() =>
    alert(`Sending ${formatNumber(amountSend)} ${fromCurrency} to ${toCurrency}`)
  }
  disabled={!amountSend || isNaN(amountSend)}
>
  Send Money
</SendButton>

    </div>
  );
}

export default CurrencyConverter;
