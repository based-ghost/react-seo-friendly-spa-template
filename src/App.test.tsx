import App from './App';
import { BrowserRouter } from 'react-router-dom';
import type { FC, PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { render, screen } from '@testing-library/react';

const TestComponentHOC: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        {children}
      </HelmetProvider>
    </BrowserRouter>
  );
};

const renderApp = () => {
  return render(
    <TestComponentHOC>
      <App />
    </TestComponentHOC>
  );
};

test('App component mounts and renders without errors', async () => {
  renderApp();
  const titleEl = screen.getByText(/SEO Friendly SPA/i);
  expect(titleEl).toBeInTheDocument();
});

