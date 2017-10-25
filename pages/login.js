import '../components/tap_events'
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page from '../components/page'
import Layout from '../components/layout'
import LoginForm from '../components/loginform'
import Router from 'next/router'
import Session from '../util/session'
import Paper from 'material-ui/Paper'

const style = {
  height: 50,
  marginBottom: 20,
  padding: 10,
  textAlign: 'center',
  display: 'block',
  opacity: 0.8
}

class Msgbox extends React.Component {
  render() {
    return (
      <div className="container-msg">
        {this.props.msg}
      </div>
    )
  }
}

export default class extends Page {

  static async getInitialProps({req}) {
    const session = new Session({req})
    return {
      session: await session.getSession(true),
      userAgent: req ? req.headers['user-agent'] : navigator.userAgent
    }
  }

  async componentDidMount() {
    // Get latest session data after rendering on client
    // Any page that is specified as the oauth callback should do this
    const session = new Session()
    this.state = {
      email: this.state.email,
      password: this.state.password,
      session: await session.getSession(true),
      error: 'Ok',
      errorMsg: 'Ok'
    }
    if (this.state.session.user) Router.push('/visor')
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      session: this.props.session,
      error: 'Ok',
      errorMsg: 'Ok'
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsernameChange(event) {
    this.setState({
      email: event.target.value.trim()
      //session: this.state.session
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value.trim()
    })
  }

  async handleSubmit(event) {
    event.preventDefault()

    const session = new Session()
    session.login(this.state.email, this.state.password)
    .then(() => {
      Router.push('/visor')
    })
    .catch(err => {
      // @FIXME Handle error
      this.setState({
        error: 'Err',
        errorMsg: 'Invalid username or password'
      })
    })
  }

  render() {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent
    })

    var paper
    paper = <Paper style={style} zDepth={1} children={<Msgbox msg={this.state.errorMsg}/>}/> 

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout session={this.state.session}>
          {paper}
          <LoginForm
            csrfToken={this.state.session.csrfToken}
            onChangeUsername={this.handleUsernameChange}
            onChangePassword={this.handlePasswordChange}
            onSubmit={this.handleSubmit}/>
        </Layout>
      </MuiThemeProvider>
    )
  }
}
