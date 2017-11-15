// @flow

import * as React from 'react';
import * as appActions from '../../../lib/app/actions';
import { bindActionCreators } from 'redux';
import createStore from '../../../lib/create-store';
import withRedux from 'next-redux-wrapper';

import Layout from '../../../components/Layout';
import Rating from '../../../components/Rating';

import { Container, Header, Image } from 'semantic-ui-react';

import { compose } from 'ramda';

const EntryPage = props => (
  <Layout title="Ebene 3">
    <Container text style={{ marginTop: '7em' }}>
      <Header as="h1">Neu im Chefsessel</Header>
      <p>Tipps und Hinweise zum Thema.</p>
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

      <Image
        centered
        src="https://media.giphy.com/media/A9qzfL1N9JAnm/giphy.gif"
        style={{ marginTop: '6em' }}
      />
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
