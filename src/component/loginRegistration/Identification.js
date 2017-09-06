/**
 * Created by dllo on 17/9/2.
 */
import React, {Component} from 'react'
import '../../assets/styles/loginRegistration/LoginAndRegister.styl'

// 使用手机号/邮箱注册页面
class Identification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      r: 'fan',
      left: 0,
      x1: 0,
      tf: false,
      time: '',
      offsetLeft: 0
    }
  }
  clickFan = () => {
    var ZhuCe = document.getElementById('w-zhuce')
    var Wbox = document.getElementById('w-box')
    Wbox.style.display = 'none'
    ZhuCe.style.display = 'block'
  };
  down = (e) => {
    console.log('点击' + e.clientX)
    this.setState({
      x1: e.clientX,
      tf: true,
      time: 0
    })
  }
  move = (e) => {
    if (this.state.tf) {
      this.setState({
        left: e.clientX - this.state.x1,
        offsetLeft: document.getElementById('a').offsetLeft
      })
      if (this.state.left >= 241) {
        this.setState({
          left: 241
        })
      } else if (this.state.left < 0) {
        this.setState({
          left: 0
        })
      }
    }
  }
  up = () => {
    let a = document.getElementById('a')
    a.move = null
    this.setState({
      left: 0,
      x1: 0,
      tf: false,
      time: 1,
      offsetLeft: 0
    })
  }
  phone = (e) => {
    // url = {
    //   tel: e.target.value,
    //   validate[value]: pass
    // }
    fetch('/api/nocaptcha/analyze.jsonp?a=FFFF00000000016AB723&&p=%7B%7D&scene=register&asyn=0&lang=cn&v=846&callback=jsonp_011337768777325452 HTTP/1.1', {
      method: 'GET',
      header: {
        'Host': 'cf.aliyun.com',
        'Connection': 'keep-alive',
        'Accept': '*/*',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5)AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4',
        'Accept-Language': 'zh-cn',
        'Referer': 'http://huaban.com/',
        'Accept-Encoding': 'gzip, deflate'
      }
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
        <div id='w-box' onMouseUp={this.up}>
          <div className='w-with-line'>
            <div className='w-xian1' />
            <span>使用手机号/邮箱注册</span>
            <div className='w-xian2' />
          </div>
          <form action=''>
            <input id="shou" className='w-shouji' type='text' placeholder='输入手机号或者邮箱' />
            <div className='slip'>
              <div className='w-green' id='green' style={{ width: this.state.offsetLeft, transition: this.state.time + 's' }} />
              <div className='w-gray' id='gray' />
              <span>请按住滑块,拖动到最右边</span>
              <div className='w-border' id='border'>
                <div className='ww-a' onMouseDown={this.down} onMouseMove={this.move} style={{ left: this.state.left + 'px', transition: this.state.time + 's' }} id='a'>>></div>
              </div>
            </div>
            <a className='w-btn' onClick={this.phone}>注册</a>
          </form>
          <a className='w-fanhui' onClick={this.clickFan}>« 返回第三方帐号登录</a>
        </div>
      </div>
    )
  }
}
export default Identification
