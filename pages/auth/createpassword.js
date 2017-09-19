import '../../components/tap_events'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Page from '../../components/page'
import Layout from '../../components/layout'
import PasswordForm from '../../components/passwordform'
import Session from '../../util/session'

export default class extends Page {
  static async getInitialProps({req}) {
    const session = new Session({req})

    return {
      session: await session.getSession(true),
      userAgent: req ? req.headers['user-agent'] : navigator.userAgent
    }
  }

  async componentDidMount() {
    // Get latest session data after rendering on client
    // Any page that is specified as the oauth callback should do this
    const session = new Session()
    this.state = {
      email: this.state.email,
      session: await session.getSession(true)
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      session: this.props.session
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault()
    
    /*
    console.log(this.state.session)
    const formData = new FormData()
    formData.set('username', 'jamarquez')
    formData.set('password', 'jamarquez')
    formData.set('_csrf', this.state.session.csrfToken)

    const response = await fetch('/savepassword', {
        method: 'POST',
        body: formData
    });
    */
    
    return new Promise(async (resolve, reject) => {
      let xhr = new XMLHttpRequest()
      let email = 'jesmarquez@hotmail.com'
      xhr.open('POST', '/savepassword', true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.onreadystatechange = async () => {
        if (xhr.readyState === 4) {
          if (xhr.status !== 200) {
            return reject(Error('XMLHttpRequest error: Error while attempting to signin'))
          }

          return resolve(true)
        }
      }
      xhr.onerror = () => {
        return reject(Error('XMLHttpRequest error: Unable to signin'))
      }
      xhr.send('_csrf=' + encodeURIComponent(this.state.session.csrfToken) + '&' + 'email=' + encodeURIComponent(email))
    })
  }

  render() {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent
    })

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Layout session={this.state.session}>
          <PasswordForm onSubmit={this.handleSubmit} csrfToken={this.state.session.csrfToken}/>
        </Layout>
      </MuiThemeProvider>
    )
  }
}