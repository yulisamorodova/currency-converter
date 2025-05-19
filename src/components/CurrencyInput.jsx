import styles from './CurrencyInput.module.css';
import { SUPPORTED_CURRENCIES } from '../utils/constants';

function CurrencyInput({ label, value, currency, onCurrencyChange, onChange, readOnly = false, placeholder }) {
  return (
    <div className={styles.wrapper}>
      <span>{label}</span>
      <div className={styles.row}>
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          placeholder={placeholder}
        />
<select
  className={styles.select}
  value={currency}
  onChange={onCurrencyChange}
  disabled={readOnly}
>
  {SUPPORTED_CURRENCIES.map((curr) => (
    <option key={curr} value={curr}>
      {curr}
    </option>
  ))}
</select>
      </div>
    </div>
  );
}

export default CurrencyInput;
