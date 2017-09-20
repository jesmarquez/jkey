import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import Router from 'next/router'
import Session from '../util/session'


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
    onChange={props.onChange}
  >
    <MenuItem primaryText="Refresh" value="1"/>
    <MenuItem primaryText="Help" value="2"/>
    <MenuItem primaryText="Sign out" value="3"/>
  </IconMenu>
)

function handleTouchTap() {
  Router.push('/')  
}

export default class AppBarMain extends React.Component {

  static propTypes() {
    return {
      session: React.PropTypes.object.isRequired,
    }
  }

  constructor(props) {
    super(props)

    console.log('constructor - appbarmain')
    this.handleOnChange.bind(this)
  }

  async handleOnChange(event, value) {
    console.log("handleOnChange!");
    console.log(value);
    console.log(this.props.session);

    if (value == 3) {
      console.log('Logout!')

      let form = document.createElement("form")
      form.setAttribute("method", "post")
      form.setAttribute("action", "/auth/signout")

      let hiddenField = document.createElement("input")
      hiddenField.setAttribute("type", "hidden")
      hiddenField.setAttribute("name", "_csrf")
      hiddenField.setAttribute("value", this.props.session.csrfToken)
      form.appendChild(hiddenField)

      document.body.appendChild(form)
      
      const session = new Session()
      await session.signout()

      // @FIXME next/router not working reliably  so using window.location
      window.location = '/'
    }
  }

  render() {
    const session = this.props.session || null
    return (
      <div>
        <AppBar
          title="JkEy"
          onTitleTouchTap={handleTouchTap}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={session.user ? <Logged onChange={this.handleOnChange.bind(this)} /> : <Login />}
        />
      </div>
    )
  }
}
