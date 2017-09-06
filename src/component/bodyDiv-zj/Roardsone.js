import React, {Component} from 'react'
import '../../assets/styles/index/BodyGt.styl'
class Roardsone extends Component {
  constructor (props) {
    super(props)
    this.state = {
      boards: {}
    }
  }
  componentWillReceiveProps (props) {
    for (var key in props) {
      this.state.boards = props[key]
    }
  }
  render () {
    return (
      <div className='flowLgt'>
        <a><img className='LaiImg' src={this.state.boards} /></a>
      </div>
    )
  }
}
export default Roardsone
