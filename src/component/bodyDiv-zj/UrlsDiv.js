/**
 * Created by dllo on 17/8/30.
 */
/**
 * Created by dllo on 17/8/29.
 */

import React, {Component} from 'react'
import '../../assets/styles/index/BodyGt.styl'
class UrlsDiv extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 5,
      t1: [],
      bImg: ''
    }
  }
  // static propTypes = {
  //   t: React.PropTypes.array
  // }
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     data: [],
  //     page: 2
  //   }
  // }
  //
  // componentDidMount () {
  //   fetch('/api/?page=' + this.state.page, {
  //     method: 'GET'
  //   })
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(response => {
  //       this.setState({
  //         data: response
  //       })
  //     })
  // }t
  componentWillReceiveProps (props) {
    for (var key in props) {
      this.state.bImg = props[key]
    }
  }
  render () {
    // const object = this.state.data.recommends
    // const imgArr2 = []
    // for (const key in object) {
    //   if (object[key].type === 'users') {
    //     const d = 'https://' + object[key].avatar.bucket + '.b0.upaiyun.com/' + object[key].avatar.key
    //     imgArr2.push(d)
    //   }
    //   var personDiv = {
    //     backgroundImage: 'url(' + imgArr2[0] + ')'
    //   }
    // }
    // const dataArr = this.state.t.map(function (item, index) {
    //   return (
    //     <p className="sb">{item.title}</p>
    //   )
    // })
    // console.log(this.state.t1, 11111111111)

    // var urlBg = {
    //   background: 'url(https://hbimg.b0.upaiyun.com/' + this.state.t1.avatar.key + ')'
    // }
    return (
      <div className='flowLgt' style={{background: 'url(' + this.state.bImg + ')'}}>
        <a href='#'><div className='MengBan'>
          <img className='smallV' src={this.state.bImg} />
        </div></a>
      </div>
    )
  }
}
export default UrlsDiv
