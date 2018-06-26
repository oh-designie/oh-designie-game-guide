import * as _ from 'lodash';
import * as React from 'react';
import { List } from 'antd';
const { Item } = List;
import { pure } from 'recompose';

import { IMAGES } from '../../constants';
import { BodyText, Heading } from '../';
import { Styles, spaceMap, lengthMap } from '../../styles';

export interface ModeInfo {
  readonly title: string;
  readonly description: string;
}

interface ModeListItemProps {
  readonly modeInfo: ModeInfo;
}

export const ModeListItem = pure(({ modeInfo }: ModeListItemProps) => (
  <Item
    extra={
      <img
        width={lengthMap.gameImg}
        alt={modeInfo.title}
        src={IMAGES.MODES[modeInfo.title]}
      />
    }
  >
    <Item.Meta
      title={
        <Heading style={styles.title} text={_.startCase(modeInfo.title)} />
      }
      description={<BodyText text={modeInfo.description} />}
    />
  </Item>
));

type StyleKey = 'title';
const styles: Styles<StyleKey> = {
  title: {
    marginTop: spaceMap.md,
    marginBottom: spaceMap.md,
  },
};
