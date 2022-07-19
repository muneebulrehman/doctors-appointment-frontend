import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import ContextProvider from './helpers/ContextProvider';

const server = setupServer(
  rest.get('/api/doctors', (req, res, ctx) =>
    res(ctx.json({ greeting: 'hello there' }))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Renders App and Nav menu', async () => {
  render(
    <ContextProvider>
      <App />
    </ContextProvider>
  );

  expect(screen.getByRole('navigation')).toHaveTextContent('LOG IN');
  // expect(screen.getByRole('button')).toBeDisabled();
});

test('Renders Appointments', async () => {
  const { getByText } = render(
    <ContextProvider>
      <App />
    </ContextProvider>
  );

  fireEvent.click(screen.getByText('APPOINTMENTS'));

  await waitFor(() => screen.getByRole('heading'));

  expect(
    getByText('Your existing appointments are listed below')
  ).toBeInTheDocument();
});
