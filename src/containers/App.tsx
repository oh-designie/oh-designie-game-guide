import * as React from 'react';
import { pure } from 'recompose';

import '../assets/css/styles.css';

import { BasicContainer } from '.';
import { EN_US } from '../locales';

export const App = pure(() => <BasicContainer textMap={EN_US} />);
