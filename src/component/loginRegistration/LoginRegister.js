/**
 * Created by dllo on 17/8/30.
 */
import React, {Component} from 'react'
import '../../assets/styles/loginRegistration/LoginAndRegister.styl'
import Image from '../../assets/images/activity/download.png'

// 注册组件
class Zc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      l: 'change'
    }
  }
  clickMail = () => {
    this.setState({
      l: 'change1'
    })
  };
  render () {
    var ZhuCe = document.getElementById('w-zhuce')
    if (this.state.l === 'change1') {
      ZhuCe.style.display = 'none'
    }
    return (
      <div>
        <div className="w-overlay">
          <div className="w-frame">
            <img className="w-logo" src={Image} />
            {/* 注册 */}
            <div id="w-zhuce" className="w-zhuce">
              <div className="w-zhuce-text">
                <div className="w-xian1" />
                <span>用第三方帐号注册花瓣</span>
                <div className="w-xian2" />
              </div>
              <div className="zhuce-center">
                <div className="w-zhuce-img">
                  <a href="#" className="zhuce-weibo" />
                  <a href="#" className="zhuce-qq" />
                  <a href="#" className="zhuce-weixin" />
                  <a href="#" className="zhuce-douban" />
                </div>
                <a href="#" onClick={this.clickMail} className="zhuce-a">使用手机号/邮箱注册</a>
              </div>
              <div className="w-switch">
                已有账号?
                <a href="#">登录到花瓣</a>
              </div>
            </div>
            <Identification />
          </div>
        </div>
      </div>
    )
  }
}

// 登录组件
class Identification extends Component {
  render() {
    return (
      <div>
        <div className="w-with-line">
          <div className="w-xian1" />
          <span>使用手机号/邮箱注册</span>
          <div className="w-xian2" />
        </div>
      </div>
    )
  }
}
// 控制登录 注册组件
class Dz extends Component {
  render () {
    return (
      <div>
        <Zc />
      </div>
    )
  }
}
export default Dz
