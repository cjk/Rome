// @flow

import * as React from 'react';
import * as appActions from '../../../lib/app/actions';
import { bindActionCreators } from 'redux';
import createStore from '../../../lib/create-store';
import withRedux from 'next-redux-wrapper';

import Layout from '../../../components/Layout';
import Rating from '../../../components/Rating';

import { Container, Header, Embed } from 'semantic-ui-react';

import { compose } from 'ramda';

const style = {
  h2: {
    marginTop: '2em',
    padding: '2em 0em',
  },
};

const EntryPage = props => (
  <Layout title="Ebene 3">
    <Container text style={{ marginTop: '7em' }}>
      <Header as="h1">Führungsstile</Header>

      <Embed
        id="owU5aTNPJbs"
        placeholder="/static/images/LeadingChange-Logo-no-year.png"
        source="youtube"
      />

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
      <style jsx>{`
        p {
          margin-top: 2em;
        }
      `}</style>
    </Container>{' '}

    <Container text style={{ marginTop: '3em' }}>
      <Header as="h3">Ihre Bewertung</Header>
      <Rating />
    </Container>

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
