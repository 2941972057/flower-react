/**
 * Created by dllo on 17/9/4.
 */
import React, {Component} from 'react'
import '../../assets/styles/waterList/water_list.styl'
import WaterListTop from './WaterListTop'
import WaterListMain from './WaterListMain'
import WaterListFall from './WaterListFall'
class WaterList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }
  componentDidMount() {
    fetch('/api/all/?page=1&limit=20', {
      method: 'GET'
    })
        .then(response => {
          return response.json()
        })
        .then(response => {
          this.setState({
            data: response.pins
          })
        })
  }
  delete = () => {
    document.getElementById('waterList').style.display = 'none'
  }
  render () {
    return (
      <div id='waterList'>
        <div id='waterList-deleteBox' onClick={this.delete}>
          <div id='waterList-delete' />
        </div>
        <div id='waterList-box'>
          <WaterListTop />
          <WaterListMain />
          <WaterListFall data={this.state.data} />
        </div>
      </div>
    )
  }
}
export default WaterList
