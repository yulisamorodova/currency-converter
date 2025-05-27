import { render, screen, fireEvent } from '@testing-library/react';
import CurrencyConverter from './CurrencyConverter';
import { vi } from 'vitest';

describe('CurrencyConverter', () => {
  it('renders two input fields and send button', () => {
    render(<CurrencyConverter />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(2);
    expect(screen.getByRole('button', { name: /Send Money/i })).toBeInTheDocument();
  });

it('shows correct recipient value for default amount and currencies', () => {
  render(<CurrencyConverter />);
  const inputs = screen.getAllByRole('textbox');
  const receiveInput = inputs[1];
  expect(receiveInput.value).toBe('5,057.90');
});


  it('calls alert on button click', () => {
    window.alert = vi.fn();
    render(<CurrencyConverter />);
    const button = screen.getByRole('button', { name: /Send Money/i });
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalled();
  });
});
