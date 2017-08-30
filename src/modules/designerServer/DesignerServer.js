import React, {Component} from 'react'
import Bottom from '../../component/miss/Bottom'
import Nav from '../../component/designerServer/Nav'
import ServerTop from '../../component/designerServer/ServerTop'
import Content from '../../component/designerServer/concent'
import '../../assets/styles/miss/Miss.styl'

class DesignerServer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  render () {
    return (
      <div className='wxj_background'>
        <ServerTop />
        <Nav />
        <Content />
        <Bottom />
      </div>
    )
  }
}
export default DesignerServer
