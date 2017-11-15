// @flow

import * as React from 'react';
import * as appActions from '../lib/app/actions';
import { bindActionCreators } from 'redux';
import createStore from '../lib/create-store';
import withRedux from 'next-redux-wrapper';

import Layout from '../components/Layout';
import LevelLink from '../components/LevelLink';

import { Grid, Header, Segment } from 'semantic-ui-react';

import { compose } from 'ramda';

const style = {
  h2: {
    marginTop: '2em',
    padding: '2em 0em',
  },
};

const EntryPage = props => (
  <Layout title="Ebene 2">
    <div>
      <Header
        as="h2"
        content="Wählen sie eine Unterkategorie aus:"
        style={style.h2}
        textAlign="center"
      />
      <Grid container columns={3} stackable>
        <Grid.Column>
          <LevelLink href="/lvl3/leading">
            <Segment padded="very">Neue Führungposition</Segment>
          </LevelLink>
        </Grid.Column>
        <Grid.Column>
          <LevelLink href="/lvl3/motivation">
            <Segment padded="very">Motivation</Segment>
          </LevelLink>
        </Grid.Column>
        <Grid.Column>
          <LevelLink href="/lvl3/communication">
            <Segment padded="very">Kommunikation</Segment>
          </LevelLink>
        </Grid.Column>
        <Grid.Column>
          <LevelLink href="/lvl3/criticism">
            <Segment padded="very">Kritik</Segment>
          </LevelLink>
        </Grid.Column>
        <Grid.Column>
          <LevelLink href="/lvl3/conflicts">
            <Segment padded="very">Konflikte</Segment>
          </LevelLink>
        </Grid.Column>
        <Grid.Column>
          <LevelLink href="/lvl3/team">
            <Segment padded="very">Team</Segment>
          </LevelLink>
        </Grid.Column>
        <Grid.Column>
          <LevelLink href="/lvl3/stress">
            <Segment padded="very">Stress</Segment>
          </LevelLink>
        </Grid.Column>
        <Grid.Column>
          <LevelLink href="/lvl3/decisions">
            <Segment padded="very">Entscheidungen</Segment>
          </LevelLink>
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
