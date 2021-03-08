import { render } from '@testing-library/react';
import App from './App';

test('App.tsx component mounts and renders without error', async () => {
  const { container } = render(<App />);
  expect(container.hasChildNodes()).toBeTruthy();
});
