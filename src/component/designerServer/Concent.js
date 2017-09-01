/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import '../../assets/styles/miss/Content.styl'
import Logo from '../../assets/images/miss/星.png'
const logoArr = ['子类:', '网页设计App', '设计移动网页/H5 页面设计', '活动页面设计', 'icon设计', 'banner 设计', '其它 UI 设计']
const planeArr = ['子类:', '明信片', '海报/易拉宝', '宣传册/宣传单页产品', '包装封面设计', '其他平面设计']
const UIArr = ['子类:', '网页设计App', '设计移动网页/H5', '页面设计', '活动页面设计', 'icon 设计', 'banner 设计', '其它 UI 设计']
const huaArr = ['子类:', '插画设计', '原画设计', '漫画设计', '形象/吉祥物', '其他插画艺术']
const filmArr = ['子类:', '动画设计', '宣传片/广告片设计', '视频后期']
const photoArr = ['子类:', '品牌摄影', '产品摄影', '人物摄影', '摄影后期', '其他摄影']
const clothArr = ['子类:', '高级定制', 'T-shirt 图案设计', '箱包设计', '其它服装设计']
const indoorArr = ['子类:', '室内设计家居/软装设计', '办公空间设计', '其它室内设计']
const moduleArr = ['子类:', 'Q版形象', '纹身发型', '穿搭', '跟妆']
const primateArr = ['子类:', '中国美物', '动漫周边', '明星周边']
const otherArr = ['子类:', '其它设计']

class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: 1
    }
  }

  componentDidMount () {
    fetch('/muse/api/v1/services/?category=paint_illustration&limit=20&page=1', {
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

  clickAll = () => {
    fetch('/muse/api/v1/services/', {
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
  clickLgo = () => {
    var navChild = document.getElementsByClassName('wxj_nav1')[0]
    navChild.innerHTML = ''
    for (let i = 0; i < logoArr.length; i++) {
      var aBiaoQian = document.createElement('a')
      navChild.appendChild(aBiaoQian)
      var liBiaoQian = document.createElement('li')
      liBiaoQian.innerHTML = logoArr[i]
      aBiaoQian.appendChild(liBiaoQian)
    }
    fetch('/muse/api/v1/services/?category=logo_brand', {
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
  clickLPlane = () => {
    var navChild = document.getElementsByClassName('wxj_nav1')[0]
    navChild.innerHTML = ''
    for (let i = 0; i < planeArr.length; i++) {
      var aBiaoQian = document.createElement('a')
      navChild.appendChild(aBiaoQian)
      var liBiaoQian = document.createElement('li')
      liBiaoQian.innerHTML = planeArr[i]
      aBiaoQian.appendChild(liBiaoQian)
    }
    fetch('/muse/api/v1/services/?category=graphic_design', {
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
  clickLInset = () => {
    var navChild = document.getElementsByClassName('wxj_nav1')[0]
    navChild.innerHTML = ''
    for (let i = 0; i < UIArr.length; i++) {
      var aBiaoQian = document.createElement('a')
      navChild.appendChild(aBiaoQian)
      var liBiaoQian = document.createElement('li')
      liBiaoQian.innerHTML = UIArr[i]
      aBiaoQian.appendChild(liBiaoQian)
    }
    fetch('/muse/api/v1/services/?category=web_app_ui', {
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
  clickLProduct = () => {
    var navChild = document.getElementsByClassName('wxj_nav1')[0]
    navChild.innerHTML = ''
    for (let i = 0; i < huaArr.length; i++) {
      var aBiaoQian = document.createElement('a')
      navChild.appendChild(aBiaoQian)
      var liBiaoQian = document.createElement('li')
      liBiaoQian.innerHTML = huaArr[i]
      aBiaoQian.appendChild(liBiaoQian)
    }
    fetch('/muse/api/v1/services/?category=industry_product', {
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
  clickLFilm = () => {
    var navChild = document.getElementsByClassName('wxj_nav1')[0]
    navChild.innerHTML = ''
    for (let i = 0; i < filmArr.length; i++) {
      var aBiaoQian = document.createElement('a')
      navChild.appendChild(aBiaoQian)
      var liBiaoQian = document.createElement('li')
      liBiaoQian.innerHTML = filmArr[i]
      aBiaoQian.appendChild(liBiaoQian)
    }
    fetch('/muse//api/v1/services/?category=video_animation', {
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
  clickLPhotograph = () => {
    var navChild = document.getElementsByClassName('wxj_nav1')[0]
    navChild.innerHTML = ''
    for (let i = 0; i < photoArr.length; i++) {
      var aBiaoQian = document.createElement('a')
      navChild.appendChild(aBiaoQian)
      var liBiaoQian = document.createElement('li')
      liBiaoQian.innerHTML = photoArr[i]
      aBiaoQian.appendChild(liBiaoQian)
    }
    fetch('/muse/api/v1/services/?category=graphic_design', {
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
  clickCloth = () => {
    var navChild = document.getElementsByClassName('wxj_nav1')[0]
    navChild.innerHTML = ''
    for (let i = 0; i < clothArr.length; i++) {
      var aBiaoQian = document.createElement('a')
      navChild.appendChild(aBiaoQian)
      var liBiaoQian = document.createElement('li')
      liBiaoQian.innerHTML = clothArr[i]
      aBiaoQian.appendChild(liBiaoQian)
    }
    fetch('/muse/api/v1/services/?category=costume_design', {
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
  clickIndoor = () => {
    var navChild = document.getElementsByClassName('wxj_nav1')[0]
    navChild.innerHTML = ''
    for (let i = 0; i < indoorArr.length; i++) {
      var aBiaoQian = document.createElement('a')
      navChild.appendChild(aBiaoQian)
      var liBiaoQian = document.createElement('li')
      liBiaoQian.innerHTML = indoorArr[i]
      aBiaoQian.appendChild(liBiaoQian)
    }
    fetch('/muse/api/v1/services/?category=interior_home_design', {
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
  clickModule = () => {
    var navChild = document.getElementsByClassName('wxj_nav1')[0]
    navChild.innerHTML = ''
    for (let i = 0; i < moduleArr.length; i++) {
      var aBiaoQian = document.createElement('a')
      navChild.appendChild(aBiaoQian)
      var liBiaoQian = document.createElement('li')
      liBiaoQian.innerHTML = moduleArr[i]
      aBiaoQian.appendChild(liBiaoQian)
    }
    fetch('/muse/api/v1/services/?category=graphic_design', {
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
  clickVIP = () => {
    var navChild = document.getElementsByClassName('wxj_nav1')[0]
    navChild.innerHTML = ''
    for (let i = 0; i < primateArr.length; i++) {
      var aBiaoQian = document.createElement('a')
      navChild.appendChild(aBiaoQian)
      var liBiaoQian = document.createElement('li')
      liBiaoQian.innerHTML = primateArr[i]
      aBiaoQian.appendChild(liBiaoQian)
    }
    fetch('/muse/api/v1/services/?category=custom_design', {
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
  clickOther = () => {
    var navChild = document.getElementsByClassName('wxj_nav1')[0]
    navChild.innerHTML = ''
    for (let i = 0; i < otherArr.length; i++) {
      var aBiaoQian = document.createElement('a')
      navChild.appendChild(aBiaoQian)
      var liBiaoQian = document.createElement('li')
      liBiaoQian.innerHTML = otherArr[i]
      aBiaoQian.appendChild(liBiaoQian)
    }
    fetch('/muse/api/v1/services/?category=others', {
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
    console.log(this.state.data)
    var arr = []
    var url = []
    for (let i = 0; i < this.state.data.length; i++) {
      url[i] = 'http://muse-img.b0.upaiyun.com/' + this.state.data[i]['cover'][0]['key']
      arr.push(
        <div className='wxj_content_wrap' key={i.toString()}>
          <div className='wxj_content_img'>
            <img src={url[i]} />
          </div>
          <div className='wxj_content_title'>{this.state.data[i].name}</div>
          <div className='wxj_content_price'>
            <p className='wxj_content_price_p'>${this.state.data[i].price}/{this.state.data[i].unit}</p>
          </div>
          <img src={Logo} className='wxj_content_star' />
        </div>
      )
    }
    return (
      <div>
        <div className='wxj_nav_all'>
          <ul className='wxj_nav'>
            <a style={{width: '46px', height: '19px'}}><li>分类:</li></a>
            <a onClick={this.clickAll} style={{width: '28px', height: '19px'}}><li>全部</li></a>
            <a onClick={this.clickLgo} style={{width: '76px', height: '19px'}}><li>LOGO/品牌</li></a>
            <a onClick={this.clickLPlane} style={{width: '56px', height: '19px'}}><li>平面设计</li></a>
            <a onClick={this.clickLInset} style={{width: '75px', height: '19px'}}><li>UI设计</li></a>
            <a onClick={this.clickLProduct} style={{width: '63px', height: '19px'}}><li>绘画/插画</li></a>
            <a onClick={this.clickLFilm} style={{width: '91px', height: '19px'}}><li>工业/产品设计</li></a>
            <a onClick={this.clickLPhotograph} style={{width: '68px', height: '19px'}}><li>影视/动画</li></a>
            <a onClick={this.clickCloth} style={{width: '56px', height: '19px'}}><li>服装设计</li></a>
            <a onClick={this.clickIndoor} style={{width: '56px', height: '19px'}}><li>室内设计</li></a>
            <a onClick={this.clickModule} style={{width: '56px', height: '19px'}}><li>造型设计</li></a>
            <a onClick={this.clickVIP} style={{width: '56px', height: '19px'}}><li>私家定制</li></a>
            <a onClick={this.clickOther} style={{width: '28px', height: '19px'}}><li>其他</li></a>
          </ul>
          <ul className='wxj_nav1'>
            <a style={{width: '56px', height: '19px'}}><li>子类:</li></a>
            <a style={{width: '56px', height: '19px'}}><li>插画设计</li></a>
            <a style={{width: '56px', height: '19px'}}><li>原画设计</li></a>
            <a style={{width: '56px', height: '19px'}}><li>漫画设计</li></a>
            <a style={{width: '80px', height: '19px'}}><li>形象/吉祥物</li></a>
            <a style={{width: '84px', height: '19px'}}><li>其他插画艺术</li></a>
          </ul>
        </div>
        <div className='wxj_content'>
          <div className='wxj_content_contain'>
            {arr}
          </div>
        </div>
      </div>
    )
  }
}
export default Content
