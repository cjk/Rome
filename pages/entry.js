// @flow

import * as React from 'react';
import * as appActions from '../lib/app/actions';
import { bindActionCreators } from 'redux';
import createStore from '../lib/create-store';
import withRedux from 'next-redux-wrapper';

import { compose } from 'ramda';

import Layout from '../components/Layout';
import LevelLink from '../components/LevelLink';

import { Grid, Header, Segment } from 'semantic-ui-react';

const style = {
  h2: {
    marginTop: '2em',
    padding: '2em 0em',
  },
};

const EntryPage = props => (
  <Layout title="Ebene 1">
    <div>
      <Header
        as="h2"
        content="Wo können wir helfen...?"
        style={style.h2}
        textAlign="center"
      />
      <Grid container columns={3} stackable>
        <Grid.Column>
          <LevelLink href="/level2">
            <Segment padded="very">Führung</Segment>
          </LevelLink>
        </Grid.Column>
        <Grid.Column>
          <Segment padded="very" disabled>
            Projektmanagemant
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment padded="very" disabled>
            Kundengespräche
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
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
)(EntryPage);
