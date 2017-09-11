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
    const session = new Session({req})

    return {
      session: await session.getSession(true),
      userAgent: req ? req.headers['user-agent'] : navigator.userAgent
    }
  }

  render() {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent,
      });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout session={this.props.session}>
          <CarHome />
        </Layout>
      </MuiThemeProvider>
    )
  }
}
