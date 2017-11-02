import React from 'react'
import AppBarMain from './appbarmain'
import Header from './header'

export default class extends React.Component {

  constructor(props) {
    super(props)
    
  }

  static propTypes() {
    return {
      session: React.PropTypes.object.isRequired,
      children: React.PropTypes.object.isRequired
    }
  }

  render() {
    return (
      <div>
        <Header />
        <AppBarMain session={this.props.session}/>
        <div className="container">
          {this.props.children}
        </div>
      </div>  
    )
  }
}
