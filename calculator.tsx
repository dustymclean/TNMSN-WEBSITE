import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import CalculatorPage from './pages/CalculatorPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Layout>
        <CalculatorPage />
      </Layout>
    </React.StrictMode>
  );
}