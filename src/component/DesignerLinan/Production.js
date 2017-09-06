import React, {Component} from 'react'
import '../../assets/styles/miss/Production.styl'
import Price from '../../assets/images/miss/星星.png'
import Background from '../../assets/images/miss/背景.png'
class Production extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      age: []
    }
  }
  componentDidMount () {
    fetch('/muse/api/v1/users/1174194/services/?limit=100', {
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
  designServer = (ev) => {
    console.log('第一页')
    var imgArr = document.getElementsByClassName('wxj_content_border')
    var buttonArr = document.getElementsByClassName('wxj_Producion_nav_span')
    var twoPageArr = document.getElementsByClassName('wxj_content_border-age')
    for (let i = 0; i < twoPageArr.length; i++) {
      twoPageArr[i].style.display = 'none'
    }
    for (let i = 0; i < buttonArr.length; i++) {
      buttonArr[i].style.color = '#999'
    }
    for (let i = 0; i < imgArr.length; i++) {
      imgArr[i].style.display = 'block'
    }
    var imgA = document.getElementsByClassName('wxj_Producion_production_img')[0]
    imgA.style.display = 'none'
    ev.target.style.color = '#222'
  }
  Person = (ev) => {
    console.log('第三页')
    var imgArr = document.getElementsByClassName('wxj_content_border')
    var buttonArr = document.getElementsByClassName('wxj_Producion_nav_span')
    var twoPageArr = document.getElementsByClassName('wxj_content_border-age')
    for (let i = 0; i < twoPageArr.length; i++) {
      twoPageArr[i].style.display = 'none'
    }
    for (let i = 0; i < buttonArr.length; i++) {
      buttonArr[i].style.color = '#999'
    }
    for (let i = 0; i < imgArr.length; i++) {
      console.log(imgArr[i])
      imgArr[i].style.display = 'none'
    }
    var imgA = document.getElementsByClassName('wxj_Producion_production_img')[0]
    imgA.style.display = 'block'
    ev.target.style.color = '#222'
  }
  Constructed = (ev) => {
    console.log('第二页')
    fetch('/muse/api/v1/users/1174194/boards/', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          age: response
        })
        console.log(response)
      })
    var imgArr = document.getElementsByClassName('wxj_content_border')
    var buttonArr = document.getElementsByClassName('wxj_Producion_nav_span')
    var twoPageArr = document.getElementsByClassName('wxj_content_border-age')
    for (let i = 0; i < twoPageArr.length; i++) {
      twoPageArr[i].style.display = 'inline-block'
    }
    for (let i = 0; i < imgArr.length; i++) {
      imgArr[i].style.display = 'none'
    }
    for (let i = 0; i < buttonArr.length; i++) {
      buttonArr[i].style.color = '#999'
    }
    ev.target.style.color = '#222'
  }
  render () {
    console.log(this.state.data)
    var limitArr = []
    for (let i = 0; i < this.state.data.length; i++) {
      limitArr.push(
        <div className='wxj_content_border'>
          <img src={'http://muse-img.b0.upaiyun.com/' + this.state.data[i]['cover'][0]['key']} />
          <p className='wxj_content_name'>{this.state.data[i]['name']}</p>
          <p className='wxj_content_prices'>{this.state.data[i]['price']}/{this.state.data[i]['unit']}</p>
        </div>
      )
    }
    var ageArr = []
    console.log(this.state.age)
    for (let i = 0; i < this.state.age.length; i++) {
      ageArr.push(
        <div className='wxj_content_border-age' >
          <img src={'http://hbimg.b0.upaiyun.com/' + this.state.age[i]['cover']['key'] + '_/both/280x280'} />
          <div style={{width: 280, height: 146, backgroundColor: '#fff'}}>
            <p className='wxj_content_name-age'>{this.state.age[i]['title']}</p>
            <p style={{width: 280, height: 77, color: '#ddd', fontSize: 12, textAlign: 'center'}}>{this.state.age[i]['pin_count']}张图片</p>
          </div>
        </div>
      )
    }
    return (
      <div className='wxj_Production_wrap'>
        <div className='wxj_Production_top'>
          <div className='wxj_Producion_left'>
            <div className='wxj_Producion_left_left'>
              <img src='https://hbimg.b0.upaiyun.com/0705959b4df21edc07ff66cb2a540a4405064a161899de-cWw1kT_/both/120x120' />
            </div>
            <div className='wxj_Producion_left_right'>
              <p className='wxj_Producion_title'>谛缘花</p>
              <p>
                <span className='wxj_Producion_span' style={{marginRight: '20px'}}>插画师</span><span className='wxj_Producion_span'>北京</span>
              </p>
              <p className='wxj_Producion_text'>插画师 擅长幽默搞笑商业插画  企业吉祥物 主要服务的客户有百盛 惠金所 开心麻花 京东 联想 西铁城等，2013年在央视剧组为纪录片《茶叶之路》《太湖画派》绘制场景 人设 动画等绘画的工作 。</p>
            </div>
          </div>
          <div className='wxj_Producion_right'>
            <p className='wxj_Producion_text1'>
              <span>
                <img src='https://muse.huaban.com/assets/3c5583a191a585956fd8efedd52ea2d2.svg' style={{vertAlign: 'middle'}} />
              </span>
              <span style={{textAlign: 'left', marginRight: '30px'}}>平均响应时间</span>
              <span style={{textAlign: 'right'}}>1天14时36分22秒</span>
            </p>
            <p className='wxj_Producion_text2'>
              <span style={{textAlign: 'left'}}><img src='https://muse.huaban.com/assets/2d9435c7bb7d8a668a12cbd48028daa6.svg' />实名认证</span>
              <span style={{textAlign: 'right', marginLeft: '30px'}}>已认证</span>
            </p>
            <p className='wxj_Producion_text3'>
              <span style={{textAlign: 'left', marginRight: '40px'}}>
                <img src='https://muse.huaban.com/assets/449652dee54cdd2c62b51bda2399c4fd.svg' style={{vertAlign: 'middle'}} />
                <span>评价</span>
              </span>
              <span style={{texAlign: 'right'}}><img src={Price} /></span>
            </p>
          </div>
        </div>
        <div className='wxj_Producion_nav'>
          <span className='wxj_Producion_nav_span' style={{width: 92, height: 46}} onClick={this.designServer}>设计服务</span>
          <span className='wxj_Producion_nav_span' style={{width: 60, height: 46}} onClick={this.Constructed}>原创</span>
          <span className='wxj_Producion_nav_span' style={{width: 92, height: 46}} onClick={this.Person}>个人资料</span>
          <span className='wxj_Producion_nav_right'>她/他的花瓣主页>> </span>
        </div>
        <div className='wxj_Producion_production'>
          {limitArr}
          {ageArr}
          <img className='wxj_Producion_production_img' style={{display: 'none'}} src={Background} />
        </div>
      </div>
    )
  }
}
export default Production