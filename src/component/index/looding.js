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
  render () {
    return (
      <div className='FenG'>
          加载更多
      </div>
    )
  }
}
export default LoodIng
