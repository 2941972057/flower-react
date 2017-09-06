/**
 * Created by dllo on 17/9/4.
 */
import React, {Component} from 'react'
import '../../assets/styles/index/BodyGt.styl'
class UsersLeft extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title1: ''
    }
  }
  componentWillReceiveProps (props) {
    for (var key in props) {
      this.state.title1 = props[key]
    }
  }
  render () {
    return (
      <div className='flowLgt'>
        <div className='bodyDiv-down-left'>
          <p className='pantP'>人物</p>
          <a className='titlepdown'>{this.state.title1}</a>
          <br />
          <span>123粉丝</span>
          <span>321采集</span>
        </div>
      </div>
    )
  }
}
export default UsersLeft
