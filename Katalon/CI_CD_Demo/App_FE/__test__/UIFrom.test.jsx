import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UIForm from '../src/components/UIForm'


describe('IT Job Application', () => {
    test('renders the application form', () => {
    render(<UIForm />);
    expect(screen.getByText('IT Job Application')).toBeInTheDocument();
  });

  test('contains a name input field', () => {
    render(<UIForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  });

  test('contains an email input field', () => {
    render(<UIForm />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  test('contains a position dropdown', () => {
    render(<UIForm />);
    expect(screen.getByLabelText(/position/i)).toBeInTheDocument();
  });

  test('form submits correctly with valid data', () => {
    render(<UIForm />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/position/i), { target: { value: 'frontend' } });
    fireEvent.change(screen.getByLabelText(/experience/i), { target: { value: 5 } });

    fireEvent.click(screen.getByText(/apply/i));
    
    // Assuming a submission success message or action, we would check here
    // For example, if a success message appears, check for it
    // expect(screen.getByText(/application submitted/i)).toBeInTheDocument();
  });
});
