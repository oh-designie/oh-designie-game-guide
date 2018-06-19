import * as React from 'react';
import { Col, Layout, Row } from 'antd';
import { pure } from 'recompose';

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

export const Footer = pure(({ textMap }: FooterProps) => (
  <div style={styles.footer}>
    <Layout.Footer style={styles.container}>
      <Row style={styles.links} type="flex" justify="center" align="middle">
        <Col>
          <small>{textMap.copyright}</small>
        </Col>
      </Row>
    </Layout.Footer>
  </div>
));

type StyleKey = 'container' | 'footer' | 'links';
const styles: Styles<StyleKey> = {
  container: {
    backgroundColor: colorMap.primary,
    color: colorMap.translucent,
    fontFamily: fontFamilyMap.body,
    fontSize: fontSizeMap.sm,
  },
  footer: {
    clipPath: `circle(${lengthMap.footerCircle} at 50% 760%)`,
  },
  links: {
    marginTop: spaceMap.xs,
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: lengthMap.chapterMax,
  },
};
