/**
 * Created by dllo on 17/8/23.
 */
import React, {Component} from 'react'
import Nav from '../../component/nav/Nav'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    fetch('/api/api/v1/users', {
      method: 'GET'
    })
            .then(response => {
              return response.json()
            })
        .then(response => {
          this.setState({
            data: response
          })
        })
  }
  render () {
    return (
      <div>
        <Nav />
          我是发现页面
      </div>
    )
  }
}
export default App
