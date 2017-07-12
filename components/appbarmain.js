import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import Router from 'next/router'

export default class AppBarMain extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <AppBar
          title="Meokey"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        />
      </div>
    );
  }
}
