import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import Router from 'next/router'

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    )
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
)

export default class AppBarMain extends React.Component {

  static propTypes() {
    return {
      session: React.PropTypes.object.isRequired,
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const session = this.props.session || null

    return (
      <div>
        <AppBar
          title="JkEy"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={session.user ? <Logged /> : <Login />}
        />
      </div>
    );
  }
}
