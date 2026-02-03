import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import ServicesPage from './pages/ServicesPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Layout>
        <ServicesPage />
      </Layout>
    </React.StrictMode>
  );
}