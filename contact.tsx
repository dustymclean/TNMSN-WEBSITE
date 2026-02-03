import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import ContactPage from './pages/ContactPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Layout>
        <ContactPage />
      </Layout>
    </React.StrictMode>
  );
}