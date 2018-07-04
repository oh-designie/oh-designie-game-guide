import * as _ from 'lodash';
import * as React from 'react';
import { List } from 'antd';
const { Item } = List;
import { pure } from 'recompose';

import { BodyText, Heading } from '../';
import { Styles, spaceMap, lengthMap } from '../../styles';

interface ModeListItemProps {
  readonly title: string;
  readonly description: string;
  readonly imageUrl: string;
}

export const ModeListItem = pure(
  ({ title, description, imageUrl }: ModeListItemProps) => (
    <Item extra={<img width={lengthMap.gameImg} alt={title} src={imageUrl} />}>
      <Item.Meta
        title={<Heading style={styles.title} text={_.startCase(title)} />}
        description={<BodyText text={description} />}
      />
    </Item>
  ),
);

type StyleKey = 'title';
const styles: Styles<StyleKey> = {
  title: {
    marginTop: spaceMap.md,
    marginBottom: spaceMap.md,
  },
};
