import '../components/tap_events'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Page from '../components/page'
import Layout from '../components/layout'
import LoginForm from '../components/loginform'
import Router from 'next/router'

export default class extends Page {
  constructor(props) {
    super(props)

    this.auth = this.auth.bind(this)
  }

  auth(event) {
    event.preventDefault()
    console.log('Ok')
    const url = {
      pathname: '/visor',
      query: {logged : true}
    }

    Router.push(url)
  }

  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          <LoginForm onSubmit={this.auth}/>
        </Layout>
      </MuiThemeProvider>
    )
  }
}
