/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'
import '../../assets/styles/activity/Flower-activity.styl'
import Img from '../../assets/images/activity/logo.png'
import '../../assets/styles/new/Header.styl'
// 导航
import Nav from '../../component/common/headerNav/HeaderNav'
// 登录组件
import Login from '../../component/common/headerLoginList/HeaderLoginList'
import ShowLogin from '../../component/common/headerLoginList/HeaderLoginShow'
class Start extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      a: '1',
      b: 'www'
    }
  }
  componentDidMount () {
    fetch('/api/activities/?page=1', {
      method: 'GET'
    })
            .then(response => {
              return response.json()
            })
            .then(response => {
              this.setState({
                data: response.activities
              })
            })
  }
  click = () => {
    fetch('/api/activities/?page=1', {
      method: 'GET'
    })
            .then(response => {
              return response.json()
            })
            .then(response => {
              this.setState({
                data: response.activities,
                b: 'www'
              })
            })
  }
  click1 = () => {
    // this.setState({
    //   a: '2'
    // })
    fetch('/api/activities/?page=2', {
      method: 'GET'
    })
            .then(response => {
              return response.json()
            })
            .then(response => {
              this.setState({
                data: response.activities,
                b: 'ccc'
              })
            })
  }
  render () {
    let d = document.getElementsByClassName('w-switch-a')
    for (var i = 0; i < d.length; i++) {
      d[i].style.backgroundColor = '#F2F2F2'
      d[i].style.color = 'black'
      if (this.state.b === 'www') {
        d[0].style.backgroundColor = 'black'
        d[0].style.color = '#F2F2F2'
      }
      if (this.state.b === 'ccc') {
        d[1].style.backgroundColor = 'black'
        d[1].style.color = '#F2F2F2'
      }
    }
    //  图片
    const obj = this.state.data
    const imgUrl = []
    for (const b in obj) {
      //  图片路径的拼接  b下标  obj数据
      const a = 'http://' + obj[b].extra.thumb_image.bucket + '.b0.upaiyun.com/img/activity/' + obj[b].extra.thumb_image.key
      imgUrl.push(a)
    }
      //  文字
    const dataArr = this.state.data.map(function (item, index) {
      return (
        <li key={index.toString()}>
          <div className='w-div'>
            <a className='w-a' href='#'>
              <div className='w-div-meng' />
              <div className='w-div-quan'>查看本期</div>
            </a>
            <img src={imgUrl[index]} />
          </div>
          <span className='w-span'><a href='#'>{item.title}</a></span>
        </li>
      )
    })
    return (
      <div>
        <Nav />
        <Login />
        <ShowLogin />
        <div className='w-header'>
          <div className='w-header-logo'>
            <img src={Img} />
          </div>
        </div>
        <div className='box'>
          <ul>{dataArr}</ul>
        </div>
        {/* 分页 */}
        <div className='why-switch'>
          <a className='w-switch-a' onClick={this.click} >1</a>
          <a className='w-switch-a' onClick={this.click1} >2</a>
          <a className='w-switch-a' href=''>»</a>
        </div>
        {/* 底部部分 */}
        <div className='w-foot'>
          <div className='w-foot-div'>
            <div className='w-left-a'>
              <a href='https://huaban.com/'>花瓣网</a>
              <div className='shu' />
              <a href='https://huaban.com/activities/'>花瓣活动</a>
              <div className='shu' />
              <a href='https://huaban.com/cc/business/'>商务合作</a>
            </div>
            <div className='w-right-a'>
              <a href='https://huaban.com/apps/'>下载花瓣移动客户端</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Start