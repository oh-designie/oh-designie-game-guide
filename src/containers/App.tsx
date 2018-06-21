import * as React from 'react';
import { pure } from 'recompose';
import { BrowserRouter } from 'react-router-dom';

import '../assets/css/styles.css';

import { BasicContainer } from '.';
import { EN_US } from '../locales';

export const App = pure(() => (
  <BrowserRouter>
    <BasicContainer textMap={EN_US} />
  </BrowserRouter>
));
