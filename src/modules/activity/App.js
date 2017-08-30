/**
 * Created by dllo on 17/8/23.
 */
import React, {Component} from 'react'
// 活动组件
import Start from '../../component/activity/Flower-activity'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    fetch('/api/activities/?page=1', {
      method: 'GET'
    })
            .then(response => {
              return response.json()
            })
        .then(response => {
          console.log(response)
          this.setState({
            data: response.activities
          })
        })
  }
  render () {
    return (
      <div>
        <Start />,
      </div>
    )
  }
}
export default App
