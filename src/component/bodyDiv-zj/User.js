/**
 * Created by dllo on 17/8/29.
 */
/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import '../../assets/styles/index/BodyGt.styl'
class Users extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: 1
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
      if (object[key].type === 'users') {
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
        <div className='bodyDiv-down'>
          <p className='pantP'>人物</p>
          <a className='titlepdown'>{titleArr[2]}</a>
          <br />
          <span>{fansAll[2]}粉丝</span>
          <span>{pinAll[2]}采集</span>
        </div>
      </div>
    )
  }
}
export default Users
