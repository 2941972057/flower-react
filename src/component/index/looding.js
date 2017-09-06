/**
 * Created by dllo on 17/8/28.
 */
import React, {Component} from 'react'

class LoodIng extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: 2
    }
  }
  static propTypes = {
    Click: React.PropTypes.func
  }
  render () {
    return (
      <div className='FenG' onClick={this.props.Click}>
          加载更多
      </div>
    )
  }
}
export default LoodIng
