import * as React from 'react';

import { BadgeName } from '../../enum';
import { fontSizeMap, Styles } from '../../styles';

import appStoreBadge from '../../assets/images/en_app_store.svg';
import googlePlayBadge from '../../assets/images/en_google_play.svg';

const appStoreUrl = '';
const googlePlayUrl =
  'https://play.google.com/store/apps/details?id=com.ohdesignie.www';

interface BadgeProps {
  readonly type: BadgeName;
  readonly size?: number | string;
  readonly style?: React.CSSProperties;
}

interface BadgeState {
  readonly hover: boolean;
}

interface BadgeInfo {
  readonly href: string;
  readonly src: string;
}

export class Badge extends React.Component<BadgeProps, BadgeState> {
  state = { hover: false };

  render() {
    const { size = fontSizeMap.lg, style = {}, type } = this.props;
    const { href, src } = this.getInfo();
    const { hover } = this.state;
    const hoverStyle: React.CSSProperties = hover ? styles.over : styles.out;
    return (
      <a
        href={href}
        target="_blank"
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <img
          style={{ ...styles.base, ...style, ...hoverStyle }}
          height={size}
          alt={type}
          src={src}
        />
      </a>
    );
  }

  // TODO: Apply download URLs
  private getInfo(): BadgeInfo {
    switch (this.props.type) {
      case 'appStore':
        return {
          href: appStoreUrl,
          src: appStoreBadge,
        };
      case 'googlePlay':
        return {
          href: googlePlayUrl,
          src: googlePlayBadge,
        };
      default:
        return {
          href: '',
          src: '',
        };
    }
  }

  private onMouseOver = () => this.setState({ hover: true });

  private onMouseOut = () => this.setState({ hover: false });
}

type StyleKey = 'base' | 'out' | 'over';
const styles: Styles<StyleKey> = {
  base: {
    transition: '0.3s all',
  },
  out: {
    opacity: 1,
  },
  over: {
    opacity: 0.7,
  },
};
