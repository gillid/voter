import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

export const mount = () => {
  const root = document.getElementById('root');

  window.addEventListener('DOMContentLoaded', async () => {
    render(<App />, root);
  });
};
