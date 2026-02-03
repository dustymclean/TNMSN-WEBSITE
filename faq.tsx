import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import FAQPage from './pages/FAQPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Layout>
        <FAQPage />
      </Layout>
    </React.StrictMode>
  );
}