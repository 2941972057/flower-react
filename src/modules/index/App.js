/**
 * Created by dllo on 17/8/23.
 */
import React, {Component} from 'react'
import '../../assets/styles/new/Header.styl'
import Nav from '../../component/nav/Nav'
import NavGt from '../../component/index/flowernavgt'
import '../../assets/styles/index/Navgt.styl'
import AdvertGt from '../../component/index/advert'
import '../../assets/styles/index/advert.styl'
import BodyGt from '../../component/index/BodyGt'
import '../../assets/styles/index/BodyGt.styl'
import LoodIng from '../../component/index/looding'
import Allzj from '../../component/bodyDiv-zj/Allzj'
import '../../assets/styles/index/Looding.styl'
import '../../assets/styles/index/App.styl'

class App extends Component {
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
    const object = this.state.data.banners
    const imgUrl = []
    for (const key in object) {
      const a = 'http://' + object[key].cover.bucket + '.b0.upaiyun.com' + object[key].cover.path + object[key].cover.key
      imgUrl.push(a)
    }
    var rnd = Math.floor(Math.random() * 4) + 1
    var divStyle = {
      backgroundImage: 'url(' + imgUrl[rnd] + ')'
    }

    return (

      <div className='wrap'>
        <div id='myDiv'style={divStyle} >
          <Nav />
          <NavGt />
        </div>
        <AdvertGt />
        <BodyGt />
        <Allzj />
        <LoodIng />
      </div>

    )
  }
}
export default App
