import styles from './SendButton.module.css';

function SendButton({ onClick, disabled, children }) {
  return (
    <button
      className={styles.sendButton}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default SendButton;
