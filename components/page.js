import React from 'react'
import Session from '../util/session'

export default class extends React.Component {
// Expose session to all pages
static async getInitialProps({req, query}) {
  console.log('getInitialProps - pagejs!')
  const session = new Session({req})

  return {
    session: await session.getSession(),
    userAgent: req ? req.headers['user-agent'] : navigator.userAgent,
    link: query ? query.link : {}
  }
}
}
