// @flow

import * as React from 'react';
import * as appActions from '../lib/app/actions';
import { bindActionCreators } from 'redux';
import createStore from '../lib/create-store';
import withRedux from 'next-redux-wrapper';

import { compose } from 'ramda';

import Layout from '../components/Layout';
import Rating from '../components/Rating';

import {
  Container,
  Feed,
  Form,
  Header,
  Icon,
  TextArea,
} from 'semantic-ui-react';

const style = {
  h2: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  chat: {
    padding: '2em',
    marginTop: '3em',
  },
};

const EntryPage = props => (
  <Layout title="Ebene 1">
    <Header
      as="h2"
      content="Nehmen Sie Kontakt mit einem unserer Experten auf"
      style={style.h2}
      textAlign="center"
    />
    <Container className="message">
      <Form>
        <TextArea placeholder="Sprechen Sie uns an" />
      </Form>
      <style jsx>{`
        .message {
          padding: 1em;
          margin: 2em auto 3em;
        }
      `}</style>
    </Container>

    <Container style={style.chat}>
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <img src="/static/images/elliot.jpg" />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>Elliot Fu</Feed.User> added you as a friend
              <Feed.Date>Vor 1 Stunde</Feed.Date>
            </Feed.Summary>
            <Feed.Meta>
              <Feed.Like>
                <Icon name="star" />
                4 Sterne
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="/static/images/helen.jpg" />
          <Feed.Content>
            <Feed.Summary>
              <a>Helen Troy</a> hat <a>2 neue Grafiken</a> hinzugefügt
              <Feed.Date>Vor 2 Minuten</Feed.Date>
            </Feed.Summary>
            <Feed.Extra images>
              <a>
                <img src="/static/images/wireframe.png" />
              </a>
              <a>
                <img src="/static/images/wireframe.png" />
              </a>
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name="star" />
                1 Stern
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="/static/images/helen.jpg" />
          <Feed.Content>
            <Feed.Summary
              date="Vor 2 Tagen"
              user="Jenny Hess"
              content=" hat deinen Kommentar positiv bewertet"
            />
            <Feed.Meta>
              <Feed.Like>
                <Icon name="star" />
                8 Sterne
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="/static/images/elliot.jpg" />
          <Feed.Content>
            <Feed.Summary>
              <a>Joe Henderson</a> hat
              <Feed.Date>3 Tagen</Feed.Date>
              <span> einen Kommentar hinterlassen.</span>
            </Feed.Summary>
            <Feed.Extra text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name="star" />
                5 Sterne
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Container>

    <Container text style={{ marginTop: '3em' }}>
      <Header as="h3">Ihre Bewertung zu diesem Gespräch</Header>
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
