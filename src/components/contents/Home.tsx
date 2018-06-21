import * as React from 'react';
import { pure } from 'recompose';

import { Chapter, Heading } from './../';
import { LocaleType } from '../../locales';

interface HomeProps {
  readonly textMap: LocaleType;
}

export const Home = pure(({ textMap }: HomeProps) => (
  <Chapter>
    <Heading size="lg" text={textMap.appTitle} />
  </Chapter>
));
