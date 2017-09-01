import React, {Component} from 'react'
import Bottom from '../../component/miss/Bottom'
import ServerTop from '../../component/designerServer/ServerTop'
import Content from '../../component/designerServer/Concent'

class DesignerServer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  render () {
    return (
      <div>
        <ServerTop />
        <Content />
        <Bottom />
      </div>
    )
  }
}
export default DesignerServer
