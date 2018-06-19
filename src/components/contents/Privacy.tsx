import * as React from 'react';
import { pure } from 'recompose';

import { BodyText, Chapter, Heading } from '../';
import { LocaleType } from '../../locales';

interface PrivacyProps {
  readonly textMap: LocaleType;
}

export const Privacy = pure(({ textMap }: PrivacyProps) => {
  const { title, p1, p2, p3 } = textMap.privacy;
  return (
    <Chapter>
      <Heading size="lg" text={title} />
      <Heading text={p1.title} />
      <BodyText text={p1.body} />
      <Heading text={p2.title} />
      <BodyText text={p2.body} />
      <Heading text={p3.title} />
      <BodyText text={p3.body} />
    </Chapter>
  );
});
