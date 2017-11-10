import React, { Component } from 'react';
import Link from 'next/link';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';

const FixedMenu = () => (
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Item as="a" active>
        Home
      </Menu.Item>
      <Menu.Item as="a">Leistungen</Menu.Item>
      <Menu.Item as="a">Philosophie</Menu.Item>
      <Menu.Item as="a">Akademie</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item className="item">
          <Button as="a">Anmelden</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as="a" primary>
            Registrieren
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default class LandingPage extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ visible: false });
  showFixedMenu = () => this.setState({ visible: true });

  render() {
    const { visible } = this.state;

    return (
      <div>
        {visible ? <FixedMenu /> : null}

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Leistungen</Menu.Item>
                <Menu.Item as="a">Philosophie</Menu.Item>
                <Menu.Item as="a">Akademie</Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Anmelden
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: '0.5em' }}>
                    Registrieren
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <Header
                as="h1"
                content="Fischer Consulting & Training"
                inverted
                style={{
                  fontSize: '4em',
                  fontWeight: 'normal',
                  marginBottom: 0,
                  marginTop: '3em',
                }}
              />
              <Header
                as="h2"
                content="Schnelle Unterstützung in schwierigen Situationen - egal wo sie sich gerade befinden."
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Link href="/entry">
                <a>
                  <Button primary size="huge">
                    Jetzt anfordern!
                    <Icon name="right arrow" />
                  </Button>
                </a>
              </Link>
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Wir machen Veränderungen möglich, denn wir finden Lösungen
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Sie sollen die Zusammenarbeit in ihrer Organisation
                  verbessern?
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded
                  size="large"
                  src="/static/images/fischer-team.jpg"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Mehr erfahren</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Unsere Philosophie
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Manchmal ist man in seinen Überlegungen gefangen und dreht die
                  immer gleichen Schleifen. Man zerbricht sich den Kopf, aber
                  eine funktionierende Lösung taucht nicht auf. Das passiert
                  Einzelnen, das passiert Teams, das betrifft ganze
                  Organisationen.
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  "Uns bewegt was Menschen bewegt - daher sind wir immer auf der
                  Suche nach Antworten zu Themen, die unsere Kunden
                  beschäftigen."
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src="/static/images/fischer-logo.jpg" />
                  <b>Bernhard Fischer</b> Geschäftsführer
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: '2em' }}>
              FISCHER Akademie
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Zusätzlich zu unseren bewährten Inhouse-Veranstaltungen gründeten
              wir 2009 die FISCHER Akademie. Wir wollten, dass Führungskräfte
              und Mitarbeiter auch als Einzelteilnehmer von unseren
              Veranstaltungen profitieren können.
            </p>
            <Button as="a" size="large">
              Read More
            </Button>
          </Container>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Über uns" />
                  <List link inverted>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Kontakt</List.Item>
                    <List.Item as="a">Referenzen</List.Item>
                    <List.Item as="a">Akademie</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Leistungen" />
                  <List link inverted>
                    <List.Item as="a">Management-Beratung</List.Item>
                    <List.Item as="a">Inhouse Seminare</List.Item>
                    <List.Item as="a">Outdoor Training</List.Item>
                    <List.Item as="a">Service-Lösungen</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>
                    Warum mit uns?
                  </Header>
                  <p>
                    Wir bringen Sie in kurzer Zeit zu besseren Lösungen, indem
                    wir alle Ihre Fragestellungen durch unsere unterschiedlichen
                    Betrachtungs- weisen, Ausbildungen, Perspektiven und
                    Charaktere abdecken.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}
