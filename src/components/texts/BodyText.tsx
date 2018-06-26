import * as React from 'react';
import { pure } from 'recompose';

import {
  colorMap,
  fontFamilyMap,
  Styles,
  fontSizeMap,
  spaceMap,
} from '../../styles';

interface BodyTextProps {
  readonly size?: SizeKey;
  readonly text: string;
  readonly style?: React.CSSProperties;
}

export const BodyText = pure(
  ({ size = 'sm', text, style = {} }: BodyTextProps) => {
    return <p style={{ ...styles.base, ...styles[size], ...style }}>{text}</p>;
  },
);

type SizeKey = 'sm' | 'md' | 'lg';
type StyleKey = 'base' | SizeKey;
const styles: Styles<StyleKey> = {
  base: {
    color: colorMap.primaryDark,
    fontFamily: fontFamilyMap.body,
    fontSize: fontSizeMap.sm,
    fontWeight: 300,
    textAlign: 'left',
    lineHeight: fontSizeMap.lg,
  },
  sm: {
    fontSize: fontSizeMap.xs,
    lineHeight: fontSizeMap.md,
  },
  md: {
    lineHeight: spaceMap.lg,
  },
  lg: {
    fontWeight: 600,
    lineHeight: fontSizeMap.lg,
  },
};
