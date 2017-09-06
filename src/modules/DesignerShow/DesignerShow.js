import React, {Component} from 'react'
import DesignerBottom from '../../component/Designers/DesignerBottom'
import DesignerTop from '../../component/Designers/DesignerTop'
import DesignerContent from '../../component/Designers/DesignerContent'

class DesignerShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  render () {
    return (
      <div>
        <DesignerTop />
        <DesignerContent />
        <DesignerBottom />
      </div>
    )
  }
}
export default DesignerShow
