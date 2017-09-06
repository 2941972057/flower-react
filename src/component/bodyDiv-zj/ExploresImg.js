/**
 * Created by dllo on 17/8/29.
 */

import React, {Component} from 'react'
import '../../assets/styles/index/BodyGt.styl'
class ExploresImg extends Component {
  constructor (props) {
    super(props)
    this.state = {
      explores: ''
    }
  }
  componentWillReceiveProps (props) {
    console.log(props, 10101010)
    for (var key in props) {
      this.state.explores = props[key]
    }
  }
  render () {
    return (
      <div className='flowLgt'>
        <a><img className='LaiImg' src={this.state.explores} /></a>
      </div>
    )
  }
}
export default ExploresImg
