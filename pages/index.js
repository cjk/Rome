// @flow

import * as React from 'react';
import * as appActions from '../lib/app/actions';
import { bindActionCreators } from 'redux';
import createStore from '../lib/create-store';
import withRedux from 'next-redux-wrapper';

import Head from 'next/head';
import { Modal, Header, Button, List } from 'semantic-ui-react';

import { compose } from 'ramda';

const IndexPage = props => (
  <div className="app">
    <Head>
      <link
        rel="stylesheet"
        href="/static/semantic.min.css"
      />
    </Head>

    <h3>Well hello world!</h3>

    <Modal trigger={<Button>Show Modal</Button>}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    <List vertical relaxed>
      <List.Item>
        <List.Content>
          <List.Header as="a">Next.js</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header as="a">React</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header as="a">Vue.js</List.Header>
        </List.Content>
      </List.Item>
    </List>
  </div>
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
