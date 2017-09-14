import '../../components/tap_events'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Page from '../../components/page'
import Layout from '../../components/layout'
import PasswordForm from '../../components/passwordform'
import Session from '../../util/session'

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
      session: await session.getSession(true)
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      session: this.props.session
    }
  } 

  render() {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent
    })

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout session={this.state.session}>
          <PasswordForm />
        </Layout>
      </MuiThemeProvider>
    )
  }
}