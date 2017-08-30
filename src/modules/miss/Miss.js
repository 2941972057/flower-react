/**
 * Created by dllo on 17/8/23.
 */
import React, {Component} from 'react'
import '../../assets/styles/miss/Miss.styl'
import Top from '../../component/miss/Top'
import Logos from '../../component/miss/Logos'
import Show from '../../component/miss/Show'
import Price from '../../component/miss/Price'
import Designer from '../../component/miss/Designer'
import Project from '../../component/miss/Project'
import Need from '../../component/miss/Need'
import Select from '../../component/miss/Select'
import Bottom from '../../component/miss/Bottom'
class Miss extends Component {
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
        <Top />
        <Logos />
        <Show />
        <Price />
        <Designer />
        <Project />
        <Need />
        <Select />
        <Bottom />
      </div>
    )
  }
}
export default Miss
