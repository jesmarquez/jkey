import '../components/tap_events'
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page from '../components/page'
import Layout from '../components/layout'
import CarHome from '../components/cardhome'
import Session from '../util/session'

export default class extends Page {
  static async getInitialProps({req}) {
    // On the sign in page we always force get the latest session data from the
    // server by passing 'true' to getSession. This page is the destination
    // page after logging or linking/unlinking accounts so avoids any weird
    // edge cases.
    console.log('getInitialProps - visor page')
    const session = new Session({req})

    return {
      session: await session.getSession(true), 
      userAgent: req ? req.headers['user-agent'] : navigator.userAgent 
    }
  }

  async componentDidMount() {
    // Get latest session data after rendering on client
    // Any page that is specified as the oauth callback should do this
    console.log('componentDidMount - visor page')
    const session = new Session()
    this.state = {
      email: this.state.email,
      session: await session.getSession(true)
    }
    console.log(this.state.session)
  }

  constructor(props) {
    console.log('constructor  - visor page')
    super(props)
    this.state = {
      session: this.props.session,
    }
    console.log(this.state.session)
  }
  render() {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent,
      });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout session={this.state.session}>
          <CarHome />
        </Layout>
      </MuiThemeProvider>
    )
  }
}
