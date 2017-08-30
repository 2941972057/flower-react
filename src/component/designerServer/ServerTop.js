import React, {Component} from 'react'
import '../../assets/styles/miss/Miss.styl'

class ServerTop extends Component {
  render () {
    return (
      <div className='wxj_Top1'>
        <div className='wxj_Top_nav'>
          <ul className='wxj_Top1_ul'>
            <li className='wxj_Top_l1'><a href=''><img src='https://muse.huaban.com/assets/c257ccb2a5a50804cc67d3cc09c3f337.svg' /></a></li>
            <li className='wxj_Top_l2'><a href=''>首页</a></li>
            <li className='wxj_Top_l3'><a href=''>设计服务</a></li>
            <li className='wxj_Top_l4'><a href=''>设计师</a></li>
          </ul>
          <div className='wxj_Top_nav_right'>
            <div className='wxj_Top_nav_button3'>登录</div>
            <div className='wxj_Top_nav_button2'>注册</div>
          </div>
        </div>
      </div>

    )
  }
}
export default ServerTop
