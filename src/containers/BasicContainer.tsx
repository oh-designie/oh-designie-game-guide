import * as React from 'react';
import { Affix, Layout, BackTop } from 'antd';
import { pure } from 'recompose';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Footer, Header, Home, Privacy, Terms, NotFound } from '../components';
import { LocaleType } from '../locales';
import {
  colorMap,
  fontFamilyMap,
  fontSizeMap,
  lengthMap,
  Styles,
} from '../styles';

interface BasicContainerProps {
  readonly textMap: LocaleType;
}

export const BasicContainer = pure(({ textMap }: BasicContainerProps) => (
  <BrowserRouter>
    <Layout style={styles.container}>
      <Affix>
        <Header textMap={textMap} />
      </Affix>
      <Layout.Content>
        <Switch>
          <Route exact path="/" render={() => <Home textMap={textMap} />} />
          <Route path="/privacy" render={() => <Privacy textMap={textMap} />} />
          <Route path="/terms" render={() => <Terms textMap={textMap} />} />
          <Route path="/404" render={() => <NotFound textMap={textMap} />} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout.Content>
      <Footer textMap={textMap} />
      <BackTop />
    </Layout>
  </BrowserRouter>
));

type StyleKey = 'container';
const styles: Styles<StyleKey> = {
  container: {
    backgroundColor: colorMap.offWhite,
    color: colorMap.primaryDark,
    fontFamily: fontFamilyMap.body,
    fontSize: fontSizeMap.sm,
    fontWeight: 300,
    lineHeight: fontSizeMap.lg,
    minWidth: lengthMap.minWidth,
    textAlign: 'center',
  },
};
