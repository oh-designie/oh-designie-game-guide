import * as React from 'react';
import { pure } from 'recompose';

import { BodyText, Chapter, Heading } from './../';
import { LocaleType } from '../../locales';

interface TermsProps {
  readonly textMap: LocaleType;
}

export const Terms = pure(({ textMap }: TermsProps) => {
  const { title, date, p1, p2, p3, p4 } = textMap.terms;
  return (
    <Chapter>
      <Heading size="lg" text={title} />
      <BodyText size="md" text={date} />

      <Heading text={p1.title} />
      <BodyText size="lg" text={p1.sub1} />
      <BodyText text={p1.body1} />
      <BodyText size="lg" text={p1.sub2} />
      <BodyText text={p1.body2} />
      <BodyText size="lg" text={p1.sub3} />
      <BodyText text={p1.body3} />

      <Heading text={p2.title} />
      <BodyText text={p2.body1} />

      <Heading text={p3.title} />
      <BodyText text={p3.body1} />

      <Heading text={p4.title} />
      <BodyText text={p4.body1} />
    </Chapter>
  );
});
