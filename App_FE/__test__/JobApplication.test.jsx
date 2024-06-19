import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import JobApplication from '../src/components/ui/job-application'


const testCases = [
  {
    name: 'John',
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
    name: 'Jane',
    email: 'jane@example.com',
    position: 'backend',
    experience: 3,
    skills: 'Node.js, Express',
    resume: new File(['resume content'], 'resume.pdf', { type: 'application/pdf' }),
    shouldSubmit: true
  },
  {
    name: 'Mark',
    email: 'mark@example.com',
    position: 'fullstack',
    experience: -1,
    skills: 'React, Node.js',
    resume: new File(['resume content'], 'resume.pdf', { type: 'application/pdf' }),
    shouldSubmit: false
  },
  {
    name: 'Lisa',
    email: 'lisa@example.com',
    position: 'frontend',
    experience: 2,
    skills: 'Angular, TypeScript',
    resume: new File(['resume content'], 'resume.pdf', { type: 'application/pdf' }),
    shouldSubmit: true
  },
  {
    name: 'Alice',
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
    name: 'Bob',
    email: 'bob@example.com',
    position: '',
    experience: 3,
    skills: 'Ruby on Rails',
    resume: new File(['resume content'], 'resume.pdf', { type: 'application/pdf' }),
    shouldSubmit: false
  },
  {
    name: 'Carol',
    email: 'carol@example.com',
    position: 'backend',
    experience: 2,
    skills: 'Java, Spring',
    resume: null,
    shouldSubmit: false
  },
  {
    name: 'Dan',
    email: 'dan@example.com',
    position: 'fullstack',
    experience: 7,
    skills: 'React, Node.js',
    resume: new File(['resume content'], 'resume.pdf', { type: 'application/pdf' }),
    shouldSubmit: true
  }
];

describe('Test Job Application with Data Driven Tests', () => {
  testCases.forEach((testCase, index) => {
    // loop qua 10 data 
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
