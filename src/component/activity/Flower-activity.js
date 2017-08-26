/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'
import '../../assets/styles/activity/Flower-activity.styl'
import Img from '../../assets/images/activity/logo.png'
import '../../assets/styles/new/Header.styl'
import Nav from '../../component/nav/Nav'
class Start extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      a: '1'
    }
  }
  click = () => {
    this.setState({
      date: [],
      a: '2'
    })
    console.log(this.state.a)
  }
  componentDidMount () {
    fetch('/api/activities/?page=' + this.state.a, {
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
  render () {
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
        <div className='a'>图</div>
        <div className='a1'>图2</div>
        <div className='w-header'>
          <div className='w-header-logo'>
            <img src={Img} />
          </div>
        </div>
        <div className='box'>
          <ul>{dataArr}</ul>
        </div>
        <div className='w-switch'>
          <a className='w-switch-a'>1</a>
          <a href="/api/activities/?page=2" className='w-switch-a' onClick={this.click}>2</a>
          <a className='w-switch-a' href=''>»</a>
        </div>
        <div className='w-foot'>
          <div className='w-foot-div'>
            <div className='w-left-a'>
              <a href='https://huaban.com/'>花瓣网</a>
              <div className='shu'>
                <a href='https://huaban.com/activities/'>花瓣活动</a>
              </div>
              <div className='shu'>
                <a href='https://huaban.com/cc/business/'>商务合作</a>
              </div>
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
