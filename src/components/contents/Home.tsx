import * as _ from 'lodash';
import * as React from 'react';
import { List, Row, Col, Layout } from 'antd';
import { pure } from 'recompose';

import {
  CardItem,
  Chapter,
  GameListItem,
  GameInfo,
  Heading,
  ModeListItem,
} from './../';
import { LocaleType } from '../../locales';
import { BodyText } from '../texts';
import { IMAGES } from '../../constants';

interface ModeInfo {
  readonly title: string;
  readonly description: string;
}

interface HomeProps {
  readonly textMap: LocaleType;
}

export const Home = pure(({ textMap }: HomeProps) => {
  const { gameMode, gameInfo, home } = textMap;
  return (
    <Layout>
      <Chapter>
        <Heading size="lg" text={home.start.title.EN_US} />
        <BodyText size="md" text={home.start.body.EN_US} />
        <Heading text={home.start.p1.title.EN_US} />
        <Row type="flex" gutter={0} justify="space-between" align="top">
          <Col xs={24} sm={12} md={8}>
            <CardItem
              title={home.start.p1.sub1.EN_US}
              body={home.start.p1.body1.EN_US}
              imageUrl={IMAGES.SS.start1}
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <CardItem
              title={home.start.p1.sub2.EN_US}
              body={home.start.p1.body2.EN_US}
              imageUrl={IMAGES.SS.start2}
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <CardItem
              title={home.start.p1.sub3.EN_US}
              body={home.start.p1.body3.EN_US}
              imageUrl={IMAGES.SS.start3}
            />
          </Col>
        </Row>
      </Chapter>

      <Chapter>
        <Heading size="lg" text={home.account.title.EN_US} />
        <BodyText size="md" text={home.account.body.EN_US} />
        <Heading text={home.account.p1.title.EN_US} />
        <Row type="flex" gutter={0} justify="space-between" align="top">
          <Col xs={24} sm={12} md={8}>
            <CardItem
              title={home.account.p1.sub1.EN_US}
              body={home.account.p1.body1.EN_US}
              imageUrl={IMAGES.SS.account1}
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <CardItem
              title={home.account.p1.sub2.EN_US}
              body={home.account.p1.body2.EN_US}
              imageUrl={IMAGES.SS.account2}
            />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <CardItem
              title={home.account.p1.sub3.EN_US}
              body={home.account.p1.body3.EN_US}
              imageUrl={IMAGES.SS.account3}
            />
          </Col>
        </Row>
      </Chapter>

      <Chapter>
        <Heading size="lg" text={home.mode.title.EN_US} />
        <BodyText size="md" text={home.mode.body.EN_US} />
        <List
          itemLayout="vertical"
          dataSource={_.values(gameMode)}
          renderItem={({ title, description }: ModeInfo, i: number) => (
            <ModeListItem
              title={title}
              description={description}
              imageUrl={IMAGES.MODES[title]}
            />
          )}
        />
      </Chapter>

      <Chapter>
        <Heading size="lg" text={home.game.title.EN_US} />
        <BodyText size="md" text={home.game.description.EN_US} />
        <List
          itemLayout="vertical"
          size="large"
          dataSource={_.values(gameInfo)}
          renderItem={(game: GameInfo, i: number) => (
            <GameListItem key={i} gameInfo={game} />
          )}
        />
      </Chapter>
    </Layout>
  );
});
