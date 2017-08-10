import '../../../components/tap-events'
import Link from 'next/link'
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page from '../../../components/page'
import Layout from '../../../components/layout'

export default class extends Page {
  render() {
  	const muiTheme = getMuiTheme({
  		userAgent: this.props.userAgent
  	})

    return (
      <Layout session={this.props.session}>
        <h2>Unable to sign in</h2>
        <p>The link you tried to use to sign in was not valid.</p>
        <p><Link href="/signup"><a>Request a new sign in link.</a></Link></p>
      </Layout>
    )
  }
}
