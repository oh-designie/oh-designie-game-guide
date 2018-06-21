import * as React from 'react';
import { pure } from 'recompose';

import { BodyText, Chapter, Heading } from './../';
import { LocaleType } from '../../locales';

interface NotFoundProps {
  readonly textMap: LocaleType;
}

export const NotFound = pure(({ textMap }: NotFoundProps) => {
  const { title, body } = textMap.notFound;
  return (
    <Chapter>
      <Heading size="lg" text={title} />
      <BodyText size="md" text={body} />
    </Chapter>
  );
});
