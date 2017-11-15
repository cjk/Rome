// @flow
import * as React from 'react';

import Head from 'next/head';

const Layout = ({ children, title }) => (
  <div className="app">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/semantic.min.css" />
    </Head>

    <div id="main">{children}</div>
  </div>
);

export default Layout;
