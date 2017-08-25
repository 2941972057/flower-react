/**
 * Created by dllo on 17/8/23.
 */
import React, {Component} from 'react'
import '../../assets/styles/App.styl'
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
          console.log(response)
          this.setState({
            data: response
          })
        })
  }
  render () {
    return (
      <div>
       我是美思页面
      </div>
    )
  }
}
export default App
