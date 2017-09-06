import React, {Component} from 'react'
// 头部样式
import '../../assets/styles/new/Header.styl'
import SearchGT from '../../component/index/searchGT'

// 头部导航组件
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      path: ''
    }
  }
  render () {
    this.state.path = location.search
    return (
      <div>
        <SearchGT path={this.state.path} />
      </div>
    )
  }
}
export default App
