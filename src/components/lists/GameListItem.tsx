import * as _ from 'lodash';
import * as React from 'react';
import { List } from 'antd';
const { Item } = List;
import { pure } from 'recompose';

import { IMAGES } from '../../constants/images';
import { BodyText, Heading } from '../';
import { colorMap, Styles, spaceMap, lengthMap } from '../../styles';

export interface GameInfo {
  readonly title: string;
  readonly category: string;
  readonly description: string;
}

interface GameListItemProps {
  readonly gameInfo: GameInfo;
}

export const GameListItem = pure(({ gameInfo }: GameListItemProps) => (
  <Item
    extra={
      <img
        width={lengthMap.gameImg}
        alt={gameInfo.title}
        src={IMAGES.GAMES[gameInfo.title]}
      />
    }
  >
    <Heading style={styles.title} text={_.startCase(gameInfo.title)} />
    <BodyText style={styles.category} text={_.startCase(gameInfo.category)} />
    <BodyText text={gameInfo.description} />
  </Item>
));

type StyleKey = 'category' | 'title';
const styles: Styles<StyleKey> = {
  category: {
    color: colorMap.primary,
  },
  title: {
    marginTop: spaceMap.sm,
    marginBottom: spaceMap.xs,
  },
};
