import React, {Component} from 'react'
import '../../assets/styles/miss/Miss.styl'
import Logo from '../../assets/images/miss/0477e743072134634690da795644cd26.svg'

class Top extends Component {
  render () {
    return (
      <div className='wxj_Top'>
        <div className='wxj_Top_nav'>
          <ul className='wxj_Top_ul'>
            <li className='wxj_Top_l1'><a href=''><img src={Logo} /></a></li>
            <li className='wxj_Top_l2'><a href=''>首页</a></li>
            <li className='wxj_Top_l3'><a href=''>设计服务</a></li>
            <li className='wxj_Top_l4'><a href=''>设计师</a></li>
          </ul>
          <div className='wxj_Top_nav_right'>
            <div className='wxj_Top_nav_button1'>注册</div>
            <div className='wxj_Top_nav_button2'>登录</div>
          </div>
        </div>
        <div className='wxj_Top_pic'>
          <img src='https://muse.huaban.com/assets/9c8e0e0f03e3d7f4d18bbf2008c82213.svg' alt='有品质的设计师 - 花瓣美思' />
        </div>
      </div>

    )
  }
}
export default Top
