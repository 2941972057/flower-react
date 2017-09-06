import React, {Component} from 'react'
import ServerTop from '../../component/designerServer/ServerTop'
import Bottom from '../../component/miss/Bottom'
import Production from '../../component/DesignerLinan/Production'

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
        <Production />
        <Bottom />
      </div>
    )
  }
}
export default DesignerServer
