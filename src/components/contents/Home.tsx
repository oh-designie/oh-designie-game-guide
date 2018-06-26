import * as _ from 'lodash';
import * as React from 'react';
import { List } from 'antd';
import { pure } from 'recompose';

import {
  Chapter,
  GameListItem,
  GameInfo,
  Heading,
  ModeListItem,
  ModeInfo,
} from './../';
import { LocaleType } from '../../locales';
import { BodyText } from '../texts';

interface HomeProps {
  readonly textMap: LocaleType;
}

export const Home = pure(({ textMap }: HomeProps) => {
  const { gameMode, gameInfo, home } = textMap;
  return (
    <div>
      <Chapter>
        <Heading size="lg" text={home.p1.title} />
        <BodyText size="md" text={home.p1.body1} />
        <List
          itemLayout="vertical"
          dataSource={_.values(gameMode)}
          renderItem={(mode: ModeInfo, i: number) => (
            <ModeListItem modeInfo={mode} />
          )}
        />
      </Chapter>
      <Chapter>
        <Heading size="lg" text={home.p2.title} />
        <BodyText size="md" text={home.p2.body1} />
        <List
          itemLayout="vertical"
          size="large"
          dataSource={_.values(gameInfo)}
          renderItem={(game: GameInfo, i: number) => (
            <GameListItem key={i} gameInfo={game} />
          )}
        />
      </Chapter>
    </div>
  );
});
