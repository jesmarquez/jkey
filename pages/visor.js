import '../components/tap_events'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page from '../components/page'
import Layout from '../components/layout'
import Lista from '../components/lista'
import SearchBox from '../components/searchbox'

export default class extends Page {

  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          <SearchBox />
          <Lista />
        </Layout>
      </MuiThemeProvider>
    )
  }
}
