import '../components/tap_events'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Page from '../components/page'
import Layout from '../components/layout'
import Session from '../util/session'
import Router from 'next/router'
import {Card, CardActions, CardHeader} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Link from 'next/link'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class extends Page {
  static async getInitialProps({req}) {
    // On the sign in page we always force get the latest session data from the
    // server by passing 'true' to getSession. This page is the destination
    // page after logging or linking/unlinking accounts so avoids any weird
    // edge cases.
    console.log('getInitialProps - signup page')
    const session = new Session({req})
    return {session: await session.getSession(true)}
  }

  async componentDidMount() {
    // Get latest session data after rendering on client
    // Any page that is specified as the oauth callback should do this
    console.log('componentDidMount - signup page')
    const session = new Session()
    this.state = {
      email: this.state.email,
      session: await session.getSession(true)
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      session: this.props.session,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    console.log('constructor - signup page')
  }

  async handleSubmit(event) {
    event.preventDefault()

    const session = new Session()
    session.signin(this.state.email)
    .then(() => {
      Router.push('/auth/check-email')
    })
    .catch(err => {
      // @FIXME Handle error
      console.log(err)
    })
  }

  render() {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent,
    })

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout>
          <Card>
            <div className="container">
              <CardHeader
                title="Registro por email"
                subtitle="Email"
                actAsExpander={false}
                showExpandableButton={false}
              />
              <form method="post" action="/auth/email/signin" onSubmit={this.handleSubmit}>
                <input name="_csrf" type="hidden" value={this.state.session.csrfToken}/>
                <div className="field-line">
                  <TextField 
                    floatingLabelText="email"
                    name="email"
                    type="email"
                    value={this.state.email}
                  />
                </div>
                <br />
                <div className="field-line">
                  <RaisedButton
                    type="submit"
                    label="Enviar email"
                    primary
                  />
                </div>
              </form>
            </div>
          </Card>
        </Layout>
      </MuiThemeProvider>
    )
  }
}
