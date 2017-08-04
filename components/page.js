import React from 'react'
import Session from '../util/session'

export default class extends React.Component {

  // Expose session to all pages
  static async getInitialProps({req}) {
    console.log('Here!'+req)
    const session = new Session({req})
    return {session: await session.getSession()}
  }

}
