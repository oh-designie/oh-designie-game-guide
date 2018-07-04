import * as React from 'react';
import { Card } from 'antd';
import { pure } from 'recompose';

import { BodyText, Heading } from '../';
import { spaceMap, Styles } from '../../styles';

interface CardItemProps {
  readonly title: string;
  readonly body: string;
  readonly imageUrl: string;
}

export const CardItem = pure(({ title, body, imageUrl }: CardItemProps) => (
  <Card style={styles.container} cover={<img alt={title} src={imageUrl} />}>
    <Heading text={title} />
    <BodyText text={body} />
  </Card>
));

type StyleKey = 'container';
const styles: Styles<StyleKey> = {
  container: {
    margin: `0 ${spaceMap.sm} ${spaceMap.md}`,
  },
};
