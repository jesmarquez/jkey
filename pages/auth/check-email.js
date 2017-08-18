import '../../components/tap_events'
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page from '../../components/page'
import Layout from '../../components/layout'
import Link from 'next/link'
import Session from '../../util/session.js'

export default class extends Page {
  static async getInitialProps({req, query}) {
    // On the sign in page we always force get the latest session data from the
    // server by passing 'true' to getSession. This page is the destination
    // page after logging or linking/unlinking accounts so avoids any weird
    // edge cases.
    console.log('getInitialProps - check-email page')
    const session = new Session({req})
    return {session: await session.getSession(true)}
  }
  constructor(props) {
    super(props)
    console.log('constructor - check-email page!')
  }

  render() {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent,
     })
    console.log('URL' + this.url)
    const url = this.url
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout session={this.props.session}>
          <h2>Revisa tu email</h2>
          <p>Se ha enviado un email con un link para entrar.</p>
          <Link href={`${url}`}><a>SignIn</a></Link>
        </Layout>
      </MuiThemeProvider>
    )
  }
}
