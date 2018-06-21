import * as React from 'react';
import { Col, Layout, Row } from 'antd';
import { pure } from 'recompose';

import { LinkText } from '../components';
import { LocaleType } from '../locales';
import {
  colorMap,
  fontSizeMap,
  fontFamilyMap,
  lengthMap,
  spaceMap,
  Styles,
} from '../styles';

interface FooterProps {
  readonly textMap: LocaleType;
}

export const Footer = pure(({ textMap }: FooterProps) => {
  const { privacy, terms } = textMap;
  return (
    <Layout.Footer style={styles.container}>
      <Row
        style={styles.links}
        type="flex"
        justify="space-between"
        align="middle"
      >
        <Col xs={24} sm={11}>
          <LinkText to="/terms" text={terms.title} />
          <span> | </span>
          <LinkText to="/privacy" text={privacy.title} />
        </Col>
        <Col xs={24} sm={11}>
          <small>{textMap.copyright}</small>
        </Col>
      </Row>
    </Layout.Footer>
  );
});

type StyleKey = 'container' | 'links';
const styles: Styles<StyleKey> = {
  container: {
    backgroundColor: colorMap.primary,
    color: colorMap.translucent,
    fontFamily: fontFamilyMap.body,
    fontSize: fontSizeMap.sm,
  },
  links: {
    marginTop: spaceMap.xs,
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: lengthMap.chapterMax,
  },
};
