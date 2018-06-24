import * as React from 'react';
import { Link } from 'react-router-dom';

import { colorMap, fontSizeMap, Styles } from '../../styles';
import { Recomposer } from 'recomposer';

interface LinkTextProps {
  readonly text: string;
  readonly to: string;
  readonly style?: React.CSSProperties;
}

export const LinkText = new Recomposer<LinkTextProps>()
  .withState('hover', 'setHover', false)
  .withHandlers({
    onLinkClick: () => () => window.scrollTo(0, 0),
    onMouseOver: ({ setHover }) => () => setHover(true),
    onMouseOut: ({ setHover }) => () => setHover(false),
  })
  .mapProps(({ hover, ...rest }) => ({
    hoverStyle: hover ? styles.over : styles.out,
    ...rest,
  }))
  .pure()
  .enhance(
    ({
      text,
      to,
      style = {},
      hoverStyle,
      onLinkClick,
      onMouseOver,
      onMouseOut,
    }) => (
      <Link
        style={{ ...styles.base, ...style, ...hoverStyle }}
        onClick={onLinkClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        to={to}
      >
        {text}
      </Link>
    ),
  );

type StyleKey = 'base' | 'out' | 'over';
const styles: Styles<StyleKey> = {
  base: {
    fontSize: fontSizeMap.xs,
    textDecoration: 'none',
    transition: '0.3s all',
  },
  out: {
    color: colorMap.white,
  },
  over: {
    color: colorMap.primaryDark,
  },
};
