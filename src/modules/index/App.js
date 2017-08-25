/**
 * Created by dllo on 17/8/23.
 */
import React, {Component} from 'react'
import '../../assets/styles/new/Header.styl'
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
          console.log(response)
          this.setState({
            data: response
          })
        })
  }
  render () {
    return (
      <div>
        <Nav />
      </div>
    )
  }
}
export default App
