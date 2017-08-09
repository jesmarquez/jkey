import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Link from 'next/link'

const CardHome = () => (
  <Card>
    <CardHeader
      title="Gestión de claves"
      subtitle="Encriptacion"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <Link prefetch href="/signup"><a><FlatButton label="SignUp" /></a></Link>
      <Link prefetch href="/login"><a><FlatButton label="SignIn" /></a></Link>
    </CardActions>
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);

export default CardHome
