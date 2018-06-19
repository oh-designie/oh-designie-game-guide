import * as React from 'react';
import { pure } from 'recompose';

import { colorMap, fontFamilyMap, fontSizeMap, Styles } from '../../styles';

interface HeadingProps {
  readonly size?: SizeKey;
  readonly text: string;
}

export const Heading = pure(({ size = 'md', text }: HeadingProps) => {
  const dom: string = size === 'xl' ? 'h1' : size === 'lg' ? 'h2' : 'h3';
  const style = { ...styles.base, ...styles[size] };
  return React.createElement(dom, { style }, text);
});

type SizeKey = 'md' | 'lg' | 'xl';
type StyleKey = 'base' | SizeKey;
const styles: Styles<StyleKey> = {
  base: {
    fontFamily: fontFamilyMap.title,
    fontWeight: 700,
    textAlign: 'left',
  },
  md: {
    color: colorMap.primaryDark,
    fontSize: fontSizeMap.md,
    marginBottom: fontSizeMap.xs,
  },
  lg: {
    color: colorMap.primaryDark,
    fontSize: fontSizeMap.lg,
    marginBottom: fontSizeMap.lg,
  },
  xl: {
    color: colorMap.primaryDarker,
    fontSize: fontSizeMap.xl,
    lineHeight: fontSizeMap.xxl,
  },
};
