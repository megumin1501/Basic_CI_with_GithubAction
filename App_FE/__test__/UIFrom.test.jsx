import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UIForm from '../src/components/UIForm'
import UIFormWithCV from '../src/components/ui/UIFormWithCV'

const testCases = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    position: 'frontend',
    experience: 5,
    skills: 'React, JavaScript',
    resume: new File(['resume content'], 'resume.pdf', { type: 'application/pdf' }),
    shouldSubmit: true
  },
  {
    name: '',
    email: 'invalid-email',
    position: '',
    experience: 0,
    skills: '',
    resume: null,
    shouldSubmit: false
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    position: 'backend',
    experience: 3,
    skills: 'Node.js, Express',
    resume: new File(['resume content'], 'resume.pdf', { type: 'application/pdf' }),
    shouldSubmit: true
  },
  {
    name: 'Mark Brown',
    email: 'mark@example.com',
    position: 'fullstack',
    experience: -1,
    skills: 'React, Node.js',
    resume: new File(['resume content'], 'resume.pdf', { type: 'application/pdf' }),
    shouldSubmit: false
  },
  {
    name: 'Lisa White',
    email: 'lisa@example.com',
    position: 'frontend',
    experience: 2,
    skills: 'Angular, TypeScript',
    resume: new File(['resume content'], 'resume.pdf', { type: 'application/pdf' }),
    shouldSubmit: true
  }
];


describe('UI Form', () => {
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

  test('form submits correctly', () => {
    render(<UIForm />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/position/i), { target: { value: 'frontend' } });
    fireEvent.change(screen.getByLabelText(/experience/i), { target: { value: 5 } });

    fireEvent.click(screen.getByText(/apply/i));
  });
});


describe('test UI Form with data driven', () => {
  testCases.forEach((testCase, index) => {
    it(`TC ${index + 1}: ${testCase.shouldSubmit ? 'should' : 'should not'} submit`, () => {
      render(<UIFormWithCV />);

      fireEvent.change(screen.getByLabelText(/name/i), { target: { value: testCase.name } });
      fireEvent.change(screen.getByLabelText(/email/i), { target: { value: testCase.email } });
      fireEvent.change(screen.getByLabelText(/position/i), { target: { value: testCase.position } });
      fireEvent.change(screen.getByLabelText(/experience/i), { target: { value: testCase.experience } });
      fireEvent.change(screen.getByLabelText(/skills/i), { target: { value: testCase.skills } });

      if (testCase.resume) {
        fireEvent.change(screen.getByLabelText(/resume/i), { target: { files: [testCase.resume] } });
      }

      fireEvent.click(screen.getByText(/apply/i));

      // For simplicity, assume we check for a form submission success/failure message.
      if (testCase.shouldSubmit) {
        // neu form submit thi ki vong hien thi successfully
        expect(screen.getByText(/application submitted successfully/i)).toBeInTheDocument();
      } else {
        // neu form khong submit thi ki vong khong hien thi successfully
        expect(screen.queryByText(/application submitted successfully/i)).not.toBeInTheDocument();
      }
    });
  });
});