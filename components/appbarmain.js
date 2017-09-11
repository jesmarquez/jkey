import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu'
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

export default class AppBarMain extends React.Component {

  static propTypes() {
    return {
      session: React.PropTypes.object.isRequired,
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      session: this.props.session,
    }
    console.log('constructor - appbarmain')
    console.log(this.state.session)
    this.handleOnChange.bind(this)

  }

  handleOnChange(event, value) {
    console.log("handleOnChange!");
    console.log(value);
    console.log(this.state.session);
    /*
      loginMessage = (
        <form id="signout" method="post" action="/auth/signout" onSubmit={this.handleSubmit}>
          <input name="_csrf" type="hidden" value={session.csrfToken}/>
          <p>
            <Link prefetch href="/"><a className="home">Home</a></Link>Logged in as <strong><Link prefetch href="/auth/signin"><a>{session.user.name || session.user.email}</a></Link></strong>
            <button type="submit">Sign out</button>
          </p>
        </form>
      )
    */

    if (value == 3) {
      console.log('Logout!')

      let form = document.createElement("form")
      form.setAttribute("method", "post")
      form.setAttribute("action", "/auth/signout")

      let hiddenField = document.createElement("input")
      hiddenField.setAttribute("type", "hidden")
      hiddenField.setAttribute("name", "_csrf")
      hiddenField.setAttribute("value", this.state.session.csrfToken)
      form.appendChild(hiddenField)

      document.body.appendChild(form)
      /*
      const session = new Session()
      await session.signout() */

      // @FIXME next/router not working reliably  so using window.location
      window.location = '/'
    }
  }

  render() {
    const session = this.props.session || null
    console.log(session)
    let temp = this.state.session
    console.log(temp)
    return (
      <div>
        <AppBar
          title="JkEy"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={session.user ? <Logged onChange={this.handleOnChange} /> : <Login />}
        />
      </div>
    );
  }
}
