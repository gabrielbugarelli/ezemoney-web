import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id:1,
          title: 'dev web site',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date()
        },
        {
          id:2,
          title: 'dev site wordpress',
          type: 'deposit',
          category: 'Dev',
          amount: 3500,
          createdAt: new Date()
        },
        {
          id:3,
          title: 'manutenção site',
          type: 'withdraw',
          category: 'manutenção',
          amount: 1000,
          createdAt: new Date()
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
