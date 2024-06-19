import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import JobApplication from '../src/components/ui/job-application'


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
  },
  {
    name: 'Alice Green',
    email: 'alice@example.com',
    position: 'frontend',
    experience: 4,
    skills: 'Vue.js, JavaScript',
    resume: new File(['resume content'], 'resume.pdf', { type: 'application/pdf' }),
    shouldSubmit: true
  },
  {
    name: '',
    email: 'noemail@example.com',
    position: 'backend',
    experience: 5,
    skills: 'Python, Django',
    resume: new File(['resume content'], 'resume.pdf', { type: 'application/pdf' }),
    shouldSubmit: false
  },
  {
    name: 'Bob Brown',
    email: 'bob@example.com',
    position: '',
    experience: 3,
    skills: 'Ruby on Rails',
    resume: new File(['resume content'], 'resume.pdf', { type: 'application/pdf' }),
    shouldSubmit: false
  },
  {
    name: 'Carol Blue',
    email: 'carol@example.com',
    position: 'backend',
    experience: 2,
    skills: 'Java, Spring',
    resume: null,
    shouldSubmit: false
  },
  {
    name: 'Dan Yellow',
    email: 'dan@example.com',
    position: 'fullstack',
    experience: 7,
    skills: 'React, Node.js',
    resume: new File(['resume content'], 'resume.pdf', { type: 'application/pdf' }),
    shouldSubmit: true
  }
];

describe('IT Job Application - Data Driven Tests', () => {
  testCases.forEach((testCase, index) => {
    it(`TC ${index + 1}: ${testCase.shouldSubmit ? 'should' : 'should not'} submit`, () => {
      render(<JobApplication />);

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
        // Check if the form submission is successful
        // This is a placeholder, adjust based on your actual success message or behavior
        expect(screen.getByText(/application submitted successfully/i)).toBeInTheDocument();
      } else {
        // Check if the form submission is blocked or an error is shown
        // This is a placeholder, adjust based on your actual error message or behavior
        expect(screen.queryByText(/application submitted successfully/i)).not.toBeInTheDocument();
      }
    });
  });
});
