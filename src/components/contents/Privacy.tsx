import * as React from 'react';
import { pure } from 'recompose';

import { BodyText, Chapter, Heading } from '../';
import { LocaleType } from '../../locales';
import { Styles } from '../../styles';

interface PrivacyProps {
  readonly textMap: LocaleType;
}

export const Privacy = pure(({ textMap }: PrivacyProps) => {
  const {
    title,
    date,
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
  } = textMap.privacy;
  return (
    <Chapter>
      <Heading size="lg" text={title} />
      <BodyText size="md" text={date} />

      <Heading text={p1.title} />
      <BodyText text={p1.body1} />

      <Heading text={p2.title} />
      <BodyText text={p2.body1} />

      <Heading text={p3.title} />
      <BodyText text={p3.body1} />

      <Heading text={p4.title} />
      <BodyText size="lg" text={p4.sub1} />
      <BodyText text={p4.body1} />
      {renderList(p4.lists1.li1)}
      <BodyText size="lg" text={p4.sub2} />
      <BodyText text={p4.body2} />
      <ol style={styles.list}>
        <li>
          <BodyText text={p4.lists2.li1[0]} />
          {renderList(p4.lists2.subli1)}
        </li>
        <li>
          <BodyText text={p4.lists2.li2[0]} />
          {renderList(p4.lists2.subli2)}
        </li>
      </ol>
      <BodyText size="lg" text={p4.sub3} />
      <BodyText text={p4.body3} />
      {renderList(p4.lists3.li1)}
      <BodyText size="lg" text={p4.sub4} />
      <BodyText text={p4.body4} />
      {renderList(p4.lists4.li1)}

      <Heading text={p5.title} />
      <BodyText text={p5.body1} />
      {renderList(p5.lists1.li1)}

      <Heading text={p6.title} />
      <BodyText size="lg" text={p6.sub1} />
      <BodyText text={p6.body1} />
      {renderList(p6.lists1.li1)}
      <BodyText size="lg" text={p6.sub2} />
      <BodyText text={p6.body2} />
      <BodyText size="lg" text={p6.sub3} />
      <BodyText text={p6.body3} />
      {renderList(p6.lists3.li1)}

      <Heading text={p7.title} />
      <BodyText text={p7.body1} />
      <BodyText text={p7.body2} />

      <Heading text={p8.title} />
      <BodyText text={p8.body1} />
      <ol style={styles.list}>
        <li>
          <BodyText text={p8.lists1.li1[0]} />
          <BodyText text={p8.lists1.li1[1]} />
        </li>
        <li>
          <BodyText text={p8.lists1.li2[0]} />
          <BodyText text={p8.lists1.li2[1]} />
        </li>
      </ol>

      <Heading text={p9.title} />
      <BodyText text={p9.body1} />

      <Heading text={p10.title} />
      <BodyText text={p10.body1} />

      <Heading text={p11.title} />
      <BodyText text={p11.body1} />

      <Heading text={p12.title} />
      <BodyText text={p12.body1} />

      <Heading text={p13.title} />
      <BodyText size="lg" text={p13.sub1} />
      <BodyText text={p13.body1} />
      <BodyText size="lg" text={p13.sub2} />
      <BodyText text={p13.body2} />

      <Heading text={p14.title} />
      <BodyText text={p14.body1} />
    </Chapter>
  );
});

const renderList = (list: string[]) => (
  <ol style={styles.item}>
    {list.map((t, i) => (
      <li key={i}>
        <BodyText text={t} />
      </li>
    ))}
  </ol>
);

type StyleKey = 'item' | 'list';
const styles: Styles<StyleKey> = {
  item: {
    listStyle: 'lower-roman',
  },
  list: {
    listStyle: 'lower-latin',
  },
};
