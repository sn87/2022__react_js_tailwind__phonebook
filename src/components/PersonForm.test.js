import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PersonForm from './PersonForm'
import userEvent from '@testing-library/user-event'

test('<PersonForm />', async () => {
  const createPerson = jest.fn();
  const user = userEvent.setup();

  render(<PersonForm createPerson={createPerson} />);

  const inputName = screen.getByLabelText('Name');
  const inputNumber = screen.getByLabelText('Number');
  const sendButton = screen.getByText('Add Person');

  await user.type(inputName, 'testing input name' );
  await user.type(inputNumber, 'testing input number' );
  await user.click(sendButton);

  expect(createPerson.mock.calls).toHaveLength(1);
  expect(createPerson.mock.calls[0][0]).toEqual('testing input name' );
  expect(createPerson.mock.calls[0][1]).toEqual('testing input number' );
});
