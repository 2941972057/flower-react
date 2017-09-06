/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import '../../assets/styles/miss/Content.styl'
import Logo from '../../assets/images/miss/星.png'
import you from '../../assets/images/miss/8D905C1A-5E94-4B8D-B54F-8A6B6584DF70.png'
import zuo from '../../assets/images/miss/86A495BF-7F9A-461A-9147-2FF3B74A1F6C.png'
import ui from '../../assets/images/miss/DBE69879-98B4-4564-A6AC-A897E8FA2A1B.png'

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
      liBiaoQian.onclick = function() {
        var urlArr = ['api/v1/services/?category=logo_brand&sub_category=logo_design', 'api/v1/services/?category=logo_brand&sub_category=vi_system_brand', 'api/v1/services/?category=logo_brand&sub_category=business_card_brand', 'api/v1/services/?category=logo_brand&sub_category=space_brand', 'api/v1/services/?category=logo_brand&sub_category=business_gift_brand', 'api/v1/services/?category=logo_brand&sub_category=brand_others']
        this.ajax(urlArr[i])
      }.bind(this)
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
      liBiaoQian.onclick = function() {
        var urlArr = ['api/v1/services/?category=graphic_design&sub_category=postcard_graphic', 'api/v1/services/?category=graphic_design&sub_category=poster_graphic', 'api/v1/services/?category=graphic_design&sub_category=brochure_page_graphic', 'api/v1/services/?category=graphic_design&sub_category=package_graphic', 'api/v1/services/?category=graphic_design&sub_category=cover_graphic', 'api/v1/services/?category=graphic_design&sub_category=graphic_others']
        this.ajax(urlArr[i])
      }.bind(this)
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
      liBiaoQian.onclick = function() {
        var urlArr = ['api/v1/services/?category=logo_brand&sub_category=logo_design', 'api/v1/services/?category=logo_brand&sub_category=vi_system_brand', 'api/v1/services/?category=logo_brand&sub_category=space_brand', 'api/v1/services/?category=logo_brand&sub_category=business_gift_brand', 'api/v1/services/?category=logo_brand&sub_category=brand_others']
        this.ajax(urlArr[i])
      }.bind(this)
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
      liBiaoQian.onclick = function() {
        var urlArr = ['api/v1/services/?category=paint_illustration&sub_category=illustration', 'api/v1/services/?category=paint_illustration&sub_category=origin_paint', 'api/v1/services/?category=paint_illustration&sub_category=cartoon_paint', 'api/v1/services/?category=paint_illustration&sub_category=mascot', 'api/v1/services/?category=paint_illustration&sub_category=paint_others']
        this.ajax(urlArr[i])
      }.bind(this)
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
      liBiaoQian.onclick = function() {
        var urlArr = ['api/v1/services/?category=paint_illustration&sub_category=illustration', 'api/v1/services/?category=paint_illustration&sub_category=origin_paint', 'api/v1/services/?category=paint_illustration&sub_category=cartoon_paint', 'api/v1/services/?category=paint_illustration&sub_category=mascot', 'api/v1/services/?category=paint_illustration&sub_category=paint_others']
        this.ajax(urlArr[i])
      }.bind(this)
      aBiaoQian.appendChild(liBiaoQian)
    }
    fetch('/muse/api/v1/services/?category=video_animation', {
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
      liBiaoQian.onclick = function() {
        var urlArr = ['api/v1/services/?category=paint_illustration&sub_category=illustration', 'api/v1/services/?category=paint_illustration&sub_category=origin_paint', 'api/v1/services/?category=paint_illustration&sub_category=cartoon_paint', 'api/v1/services/?category=paint_illustration&sub_category=mascot', 'api/v1/services/?category=paint_illustration&sub_category=paint_others']
        this.ajax(urlArr[i])
      }.bind(this)
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
  ajax = (url) => {
    fetch('/muse/' + url, {
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
      liBiaoQian.onclick = function() {
        var urlArr = ['api/v1/services/?category=costume_design&sub_category=custom-tailor', 'api/v1/services/?category=costume_design&sub_category=tshirt_costume', 'api/v1/services/?category=costume_design&sub_category=case_bag', 'api/v1/services/?category=costume_design&sub_category=costume_others']
        this.ajax(urlArr[i])
      }.bind(this)
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
      liBiaoQian.onclick = function() {
        var urlArr = ['api/v1/services/?category=interior_home_design&sub_category=interior_design', 'api/v1/services/?category=interior_home_design&sub_category=home_design', 'api/v1/services/?category=interior_home_design&sub_category=office_design', 'api/v1/services/?category=interior_home_design&sub_category=interior_others']
        this.ajax(urlArr[i])
      }.bind(this)
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
      liBiaoQian.onclick = function() {
        var urlArr = ['api/v1/services/?category=paint_illustration&sub_category=illustration', 'api/v1/services/?category=paint_illustration&sub_category=origin_paint', 'api/v1/services/?category=paint_illustration&sub_category=cartoon_paint', 'api/v1/services/?category=paint_illustration&sub_category=mascot', 'api/v1/services/?category=paint_illustration&sub_category=paint_others']
        this.ajax(urlArr[i])
      }.bind(this)
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
      liBiaoQian.onclick = function() {
        var urlArr = ['api/v1/services/?category=custom_design&sub_category=chinese_beautiful_things', 'api/v1/services/?category=custom_design&sub_category=anime_related_products', 'api/v1/services/?category=custom_design&sub_category=star_related_products']
        this.ajax(urlArr[i])
      }.bind(this)
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
      liBiaoQian.onclick = function() {
        var urlArr = ['api/v1/services/?category=others&sub_category=sub_others']
        this.ajax(urlArr[i])
      }.bind(this)
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
          <div className='wxj_content_bottom'>
            <ul className='wxj_content_page'>
              <a href=''><li style={{width: '64.58px', height: '40px'}}><img style={{marginTop: '10px'}} src={zuo} /></li></a>
              <a ><li onClick={this.clickAll} style={{width: '48.91px', height: '40px'}}>1</li></a>
              <a><li onClick={this.clickLgo} style={{width: '48.91px', height: '40px'}}>2</li></a>
              <a><li onClick={this.clickLPlane} style={{width: '48.91px', height: '40px'}}>3</li></a>
              <a><li onClick={this.clickLInset} style={{width: '48.91px', height: '40px'}}>4</li></a>
              <a><li onClick={this.clickLProduct} style={{width: '48.91px', height: '40px'}}>5</li></a>
              <a><li onClick={this.clickLFilm} style={{width: '48.91px', height: '40px'}}>6</li></a>
              <a><li onClick={this.clickLPhotograph} style={{width: '48.91px', height: '40px'}}>7</li></a>
              <a><li onClick={this.clickCloth} style={{width: '48.91px', height: '40px'}}>8</li></a>
              <a><li onClick={this.clickIndoor} style={{width: '48.91px', height: '40px'}}>9</li></a>
              <a><li onClick={this.clickModule} style={{width: '48.91px', height: '40px'}}>...</li></a>
              <a><li onClick={this.clickVIP} style={{width: '57.8px', height: '40px'}}>99</li></a>
              <a><li onClick={this.clickOther} style={{width: '66.7px', height: '40px'}}>100</li></a>
              <a><li onClick={this.clickOther} style={{width: '64.58px', height: '40px'}}><img src={ui} style={{marginTop: '10px'}} /></li></a>
              <a href=''><li onClick={this.clickOther} style={{width: '64.58px', height: '40px'}}><img style={{marginTop: '10px'}} src={you} /></li></a>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Content
