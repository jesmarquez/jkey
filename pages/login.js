import '../components/tap_events'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page from '../components/page'
import Layout from '../components/layout'
import LoginForm from '../components/loginform'

export default class extends Page {

  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          <LoginForm />
        </Layout>
      </MuiThemeProvider>
    )
  }
}
