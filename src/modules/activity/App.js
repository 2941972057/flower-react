/**
 * Created by dllo on 17/8/23.
 */
import React, {Component} from 'react'
// 活动组件
import Start from '../../component/activity/Flower-activity'
class App extends Component {
  componentDidMount () {
    document.onscroll = function () {
      var theTop = document.body.scrollTop
      if (theTop >= 70) {
        document.getElementById('yin').style.display = 'block'
      } else {
        document.getElementById('yin').style.display = 'none'
      }
    }
  }

  render () {
    return (
      <div>
        <Start />
      </div>
    )
  }
}
export default App
