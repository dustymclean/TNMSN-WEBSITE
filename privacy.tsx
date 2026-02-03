import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import PrivacyPage from './pages/PrivacyPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Layout>
        <PrivacyPage />
      </Layout>
    </React.StrictMode>
  );
}