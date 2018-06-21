import * as React from 'react';
import { Link } from 'react-router-dom';

import { colorMap, fontSizeMap, Styles } from '../../styles';

interface LinkTextProps {
  readonly text: string;
  readonly to: string;
}

interface LinkTextState {
  readonly hover: boolean;
}

export class LinkText extends React.Component<LinkTextProps, LinkTextState> {
  state = {
    hover: false,
  };

  render() {
    const { text, to } = this.props;
    const style = this.state.hover ? styles.over : styles.out;
    return (
      <Link
        style={{ ...styles.base, ...style }}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        to={to}
      >
        {text}
      </Link>
    );
  }

  private onMouseOver = () => this.setState({ hover: true });

  private onMouseOut = () => this.setState({ hover: false });
}

type StyleKey = 'base' | 'out' | 'over';
const styles: Styles<StyleKey> = {
  base: {
    fontSize: fontSizeMap.xs,
  },
  out: {
    color: colorMap.white,
  },
  over: {
    color: colorMap.primaryDark,
  },
};
