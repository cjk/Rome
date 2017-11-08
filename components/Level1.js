// @flow

import * as React from 'react';
import Link from 'next/link';

import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table,
} from 'semantic-ui-react';

const style = {
  h2: {
    marginTop: '2em',
    padding: '2em 0em',
  },
};

const Level1 = (props: Level1Props) => (
  <div>
    <Header
      as="h2"
      content="Bitte wählen Sie..."
      style={style.h2}
      textAlign="center"
    />
    <Grid container columns={3} stackable>
      <Grid.Column>
        <Segment padded='very'>Führung</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment padded='very' disabled>Projektmanagemant</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment padded='very' disabled>Kundengespräche</Segment>
      </Grid.Column>
    </Grid>
  </div>
);

export default Level1;
