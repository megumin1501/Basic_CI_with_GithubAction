import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from '../src/components/TodoApp';
import { describe, it, expect } from 'vitest';
import UIForm from '../src/components/UIForm'

describe('TodoApp', () => {
  test('Adding item to the list', () => {
    // Render the App
    const { getByTestId, getByText } = render(<TodoApp />);

    const inputField = getByTestId('todo-input');
    fireEvent.change(inputField, { target: { value: 'Buy groceries' } });
    fireEvent.keyDown(inputField, { key: 'Enter', code: 13, charCode: 13 });

    const newItem = getByText('Buy groceries');
    expect(newItem).toBeInTheDocument();
  });

  test('Editing item in the list', () => {
    const { getByTestId, getByText } = render(<TodoApp />);

    const inputField = getByTestId('todo-input');
    fireEvent.change(inputField, { target: { value: 'Buy groceries' } });
    fireEvent.keyDown(inputField, { key: 'Enter', code: 13, charCode: 13 });

    const editButton = getByTestId('edit-button');
    fireEvent.click(editButton);

    fireEvent.change(inputField, { target: { value: 'Buy milk' } });
    fireEvent.keyDown(inputField, { key: 'Enter', code: 13, charCode: 13 });

    const editedItem = getByText('Buy milk');
    expect(editedItem).toBeInTheDocument();
  });

  test('Deleting item from the list', () => {
    const { getByTestId, getByText, queryByText } = render(<TodoApp />);

    const inputField = getByTestId('todo-input');
    fireEvent.change(inputField, { target: { value: 'Buy groceries' } });
    fireEvent.keyDown(inputField, { key: 'Enter', code: 13, charCode: 13 });

    const deleteButton = getByTestId('delete-button');
    fireEvent.click(deleteButton);

    const deletedItem = queryByText('Buy groceries');
    expect(deletedItem).toBeNull();
  });

});


