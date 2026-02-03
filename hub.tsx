import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import { HUBS } from './constants';
import HubDetail from './pages/HubDetail';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Layout>
        <HubDetail />
      </Layout>
    </React.StrictMode>
  );
}