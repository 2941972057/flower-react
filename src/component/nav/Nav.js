/**
 * Created by dllo on 17/8/24.
 */
import React, {Component} from 'react'
class Nav extends Component {
  render () {
    return (
      <div id='header-nav'>
        <div id='nav'>
          <div id='nav-left'>
            <a href='index.html' className='nav-list'>
              <img src='http://huaban.com/img/logo.svg' alt='' className='nav-logo' />
            </a>
            <a href='index.html' className='nav-list'>发现</a>
            <a href='new.html' className='nav-list'>最新</a>
            <a href='miss.html' className='nav-list'>美思</a>
            <a href='activity.html' className='nav-list'>活动<i><img src='http://huaban.com/img/muse/em-new.svg' alt='' className='nav-new' /></i></a>
            <a href='https://meia.me/' className='nav-list'>教育</a>
            <span>···</span>
          </div>
          <div id='nav-right'>
            <button id='register'>注册</button>
            <button id='login'>登录</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Nav
