import { render, screen, fireEvent } from '@testing-library/react';
import Gameplay from './gameplay';

describe('Gameplay Component', () => {
  beforeEach(() => {
    // Mock localStorage
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn(),
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  });

  test('renders game content and choice buttons', () => {
    render(<Gameplay />);
    
    // Check for initial story content
    expect(screen.getByText(/You, Sherlock Hooves/i)).toBeInTheDocument();
    
    // Check for choice button
    const choiceButton = screen.getByText(/Go to Sheepy Hollow/i);
    expect(choiceButton).toBeInTheDocument();
    
    // Check for dashboard button
    expect(screen.getByText(/Return to Dashboard/i)).toBeInTheDocument();
  });

  test('navigates to next story node when choice is clicked', () => {
    render(<Gameplay />);
    
    // Click the first choice
    const choiceButton = screen.getByText(/Go to Sheepy Hollow/i);
    fireEvent.click(choiceButton);
    
    // Check that we've moved to the next story node
    expect(screen.getByText(/Officer Quackers greets you/i)).toBeInTheDocument();
  });
});