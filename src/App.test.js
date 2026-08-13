// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AxisVertex title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AxisVertex/i);
    expect(titleElement).toBeInTheDocument();
});
