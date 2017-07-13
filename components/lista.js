import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Computer from 'material-ui/svg-icons/hardware/computer'

const Lista = () => (
  <div className="container">
    <List>
      <ListItem primaryText="Server One" leftIcon={<Computer />} />
      <ListItem primaryText="Server Two" leftIcon={<Computer />} />
      <ListItem primaryText="Server Three" leftIcon={<Computer />} />
      <ListItem primaryText="Server Four" leftIcon={<Computer />} />
      <ListItem primaryText="Server Five" leftIcon={<Computer />} />
    </List>
  </div>
);

export default Lista
