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

test('loads and displays greeting', async () => {
  render(
    <ContextProvider>
      <App />
    </ContextProvider>
  );

  fireEvent.click(screen.getByText('APPOINTMENTS'));

  await waitFor(() => screen.getByRole('heading'));

  expect(screen.getByRole('heading')).toHaveTextContent('APPOINTMENTS');
  // expect(screen.getByRole('button')).toBeDisabled();
});

// test('handles server error', async () => {
//   server.use(rest.get('/greeting', (req, res, ctx) => res(ctx.status(500))));

//   render(
//     <ContextProvider>
//       <App url="/greeting" />
//     </ContextProvider>
//   );

//   fireEvent.click(screen.getByText('Load Greeting'));

//   await waitFor(() => screen.getByRole('alert'));

//   expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!');
//   expect(screen.getByRole('button')).not.toBeDisabled();
// });
