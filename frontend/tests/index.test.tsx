import { render, screen } from '@testing-library/react';
import HomePage from '../pages/index';

describe('HomePage', () => {
  it('renders the homepage', () => {
    render(<HomePage />);
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('Frontend is running')).toBeInTheDocument();
  });
}); 