import * as React from 'react';
import { pure } from 'recompose';

import { BodyText, Chapter, Heading } from './../';
import { LocaleType } from '../../locales';

interface TermsProps {
  readonly textMap: LocaleType;
}

export const Terms = pure(({ textMap }: TermsProps) => {
  const { title, p1, p2, p3 } = textMap.terms;
  return (
    <Chapter>
      <Heading size="lg" text={title} />
      <Heading text={p1.title} />
      <BodyText text={p1.body1} />
      <Heading text={p2.title} />
      <BodyText text={p2.body1} />
      <Heading text={p3.title} />
      <BodyText text={p3.body1} />
    </Chapter>
  );
});
