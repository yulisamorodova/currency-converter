// utils/exchangeRates.js

export const getExchangeRate = (from, to) => {
    if (from === to) return 1;
  
    const rates = {
      'USD_EUR': 0.8891,
      'EUR_USD': 1 / 0.8891,
  
      'USD_GBP': 0.7590,
      'GBP_USD': 1 / 0.7590,
  
      'USD_PLN': 3.8261,
      'PLN_USD': 1 / 3.8261,
  
      'EUR_GBP': 0.8419,
      'GBP_EUR': 1 / 0.8419,
  
      'EUR_PLN': 4.2356,
      'PLN_EUR': 1 / 4.2356,
  
      'GBP_PLN': 5.0579,
      'PLN_GBP': 1 / 5.0579,
    };
  
    const key = `${from}_${to}`;
    return rates[key] ?? 1;
  };
  