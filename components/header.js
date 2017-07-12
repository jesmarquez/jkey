/* eslint-disable react/no-danger */
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Package from '../package'

export default class extends React.Component {

  render() {
    let stylesheet
    // In development, serve CSS inline (with live reloading) with webpack
    // NB: Not using dangerouslySetInnerHTML will cause problems with some CSS
    stylesheet=<link href="/static/styles.css" rel="stylesheet" />

    return (
      <header>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
          <title>MeoKey</title>
          {stylesheet}
        </Head>
      </header>
    )
  }
}
