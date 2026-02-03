import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import AreaPage from './pages/AreaPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Layout>
        <AreaPage />
      </Layout>
    </React.StrictMode>
  );
}