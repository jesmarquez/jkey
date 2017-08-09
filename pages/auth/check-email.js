import '../../components/tap_events'
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page from '../../components/page'
import Layout from '../../components/layout'

export default class extends Page {
  render() {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent,
     })
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout session={this.props.session}>
          <h2>Revisa tu email</h2>
          <p>Se ha enviado un email con un link para entrar.</p>
        </Layout>
      </MuiThemeProvider>
    )
  }
}
