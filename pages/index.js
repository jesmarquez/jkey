import '../components/tap_events'
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page from '../components/page'
import Layout from '../components/layout'
import CarHome from '../components/cardhome'
import Session from '../util/session'
import Router from 'next/router'

export default class extends Page {
  static async getInitialProps({req}) {
    console.log('getInitialProps - index page')
    const session = new Session({req})

    return {
      session: await session.getSession(true), 
      userAgent: req ? req.headers['user-agent'] : navigator.userAgent 
    }
  }

  constructor(props) {
    super(props)
    
    this.state = {
      session: this.props.session,
    }
    console.log('constructor - index page')
  }

  async componentDidMount() {
    // Get latest session data after rendering on client
    // Any page that is specified as the oauth callback should do this
    console.log('componentDidMount - visor page')
    const session = new Session()
    this.state = {
      session: await session.getSession(true)
    }
    if (this.state.session.user) Router.push('/visor')
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
