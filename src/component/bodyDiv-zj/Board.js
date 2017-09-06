/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import '../../assets/styles/index/BodyGt.styl'
class Board extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: 2
    }
  }

  componentDidMount () {
    fetch('/api/?page=' + this.state.page, {
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
    const object = this.state.data.recommends
    const titleArr = []
    const pinAll = []
    const fansAll = []
    for (const key in object) {
      if (object[key].type === 'boards') {
        console.log(object[key].type)
        var fans = object[key].follow_count
        fansAll.push(fans)
        var title = object[key].title
        titleArr.push(title)
        var pin = object[key].pin_count
        pinAll.push(pin)
      }
    }

    return (
      <div className='flowLgt'>
        <div className='bodyDiv-top'>
          <p className='pantT'>画板</p>
          <a className='titlep'>{titleArr[0]}</a>
          <br />
          <span>{fansAll[0]}粉丝</span>
          <span>{pinAll[0]}采集</span>
          <br />
          <a className='as1'>来自</a>
          <a className='as2'>gods</a>
        </div>
      </div>
    )
  }
}
export default Board
