// @flow

import * as React from 'react';
import * as appActions from '../../lib/app/actions';
import { bindActionCreators } from 'redux';
import createStore from '../../lib/create-store';
import withRedux from 'next-redux-wrapper';

import Layout from '../../components/Layout';
import LevelLink from '../../components/LevelLink';

import { Grid, Header, Segment } from 'semantic-ui-react';

import { compose } from 'ramda';

const style = {
  h2: {
    marginTop: '2em',
    padding: '2em 0em',
  },
};

const EntryPage = props => (
  <Layout title="Ebene 3">
    <Header
      as="h2"
      content="Welcher Bereich interessiert Sie?"
      style={style.h2}
      textAlign="center"
    />
    <Grid container columns={3} stackable>
      <Grid.Column>
        <LevelLink href="/lvl4/motivation/opposition">
          <Segment padded="very">Mitarbeiter wehrt sich</Segment>
        </LevelLink>
      </Grid.Column>
      <Grid.Column>
        <LevelLink href="/lvl4/motivation/teamspirit">
          <Segment padded="very">Team zieht nicht mit</Segment>
        </LevelLink>
      </Grid.Column>
      <Grid.Column>
        <LevelLink href="/contact">
          <Segment inverted color="olive" padded="very">
            Direkt zur Kontaktaufnahme
          </Segment>
        </LevelLink>
      </Grid.Column>
    </Grid>
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
