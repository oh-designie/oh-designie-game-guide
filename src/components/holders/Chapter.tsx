import * as React from 'react';
import { Col, Row } from 'antd';
import { pure } from 'recompose';

import {
  colorMap,
  fontSizeMap,
  lengthMap,
  spaceMap,
  Styles,
} from '../../styles';

interface ChapterProps {
  readonly styles?: Partial<Styles<StyleKey>>;
}

export const Chapter = pure(
  ({ styles: s = {}, children }: ChapterProps & Partial<React.ReactPortal>) => (
    <Row style={{ ...styles.row, ...s.row }}>
      <Col>
        <section style={styles.content}>{children}</section>
      </Col>
    </Row>
  ),
);

type StyleKey = 'row' | 'content';
const styles: Styles<StyleKey> = {
  row: {
    backgroundColor: colorMap.offWhite,
    paddingTop: fontSizeMap.xxl,
    paddingRight: spaceMap.lg,
    paddingBottom: fontSizeMap.xxl,
    paddingLeft: spaceMap.lg,
  },
  content: {
    maxWidth: lengthMap.chapterMax,
    margin: 'auto',
  },
};
