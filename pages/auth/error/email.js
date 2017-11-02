import '../../../components/tap_events'
import Link from 'next/link'
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page from '../../../components/page'
import Layout from '../../../components/layout'

export default class extends Page {
  static async getInitialProps({req}) {
    // On the sign in page we always force get the latest session data from the
    // server by passing 'true' to getSession. This page is the destination
    // page after logging or linking/unlinking accounts so avoids any weird
    // edge cases.
    let props = []

    props.userAgent = req ? req.headers['user-agent'] : navigator.userAgent 
    return {props}
  }

  constructor(props) {
    super(props)
  }

  render() {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent
    })

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout>
          <h2>Unable to sign in</h2>
          <p>The link you tried to use to sign in was not valid.</p>
          <p><Link href="/signup"><a>Request a new sign in link.</a></Link></p>
        </Layout>
      </MuiThemeProvider>
    )
  }
}
