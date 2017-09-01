/**
 * Created by dllo on 17/8/26.
 */
import React, {Component} from 'react'
// 引入登录css文件
import '../../../assets/styles/common/headerLoginList/loginList.styl'
class Login extends Component {
  render () {
    return (
      <div id='header-loginList'>
        <div id='loginList'>
          <div id='loginList-left'>
            <div id='loginList-title'>国内最优质图片灵感库</div>
            <div>已有数百万出众网友，用花瓣保存喜欢的图片。</div>
          </div>
          <div id='loginList-right'>
            <div>
              <a className='weibo' href='#'>
                <div className='img' />
              </a>
              <a className='qq' href='#'>
                <div className='img1' />
              </a>
              <a className='dou' href='#'>
                <div className='img2' />
              </a>
              <a className='ren' href='#'>
                <div className='img3' />
              </a>
            </div>
            <div className='w-text'>
              <div className='heng' />
              用以上社交帐号直接登录
              <div className='heng' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Login
