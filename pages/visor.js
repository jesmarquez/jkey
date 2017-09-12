import '../components/tap_events'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Page from '../components/page'
import Layout from '../components/layout'
import Lista from '../components/lista'
import SearchBox from '../components/searchbox'
import Session from '../util/session'
import Router from 'next/router'

export default class extends Page {
  static async getInitialProps({req}) {
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
      session: await session.getSession(true)
    }
    if (this.state.session.user == null) Router.push('/login')
  }

  constructor(props) {
    super(props)
    
    this.state = {
      session: this.props.session,
    }
    console.log('constructor - visor page')

  }

  render() {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent,
    })

    let content

    if (this.state.session.user) {
      content = <div><SearchBox /><Lista /></div>
    }
    else {
      content = <div></div>
    }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout session={this.state.session}>
          {content}
        </Layout>
      </MuiThemeProvider>
    )
  }
}
