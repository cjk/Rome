// @flow

import * as React from 'react';
import * as appActions from '../lib/app/actions';
import { bindActionCreators } from 'redux';
import createStore from '../lib/create-store';
import withRedux from 'next-redux-wrapper';

import Layout from '../components/Layout';
import LandingPage from '../components/LandingPage';

import { compose } from 'ramda';

const IndexPage = props => (
  <Layout title="Ebene 1">
    <LandingPage />
  </Layout>
);

const mapDispatchToProps = dispatch => {
  const boundActions = bindActionCreators(appActions, dispatch);
  return {
    ...boundActions,
    dispatch,
  };
};

export default compose(
  withRedux(
    createStore,
    // (state: State) => ({
    //   ui: state.app.ui,
    // }),
    mapDispatchToProps
  )
)(IndexPage);
