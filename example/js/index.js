import React from 'react';
import Index from '../index';

const IndexFactory = React.createFactory(Index);

window.React = React;

React.render(
  IndexFactory(),
  document.getElementById('app')
);
