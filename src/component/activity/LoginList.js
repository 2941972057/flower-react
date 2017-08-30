/**
 * Created by dllo on 17/8/26.
 */
import React, {Component} from 'react'
// 引入登录css文件
import '../../assets/styles/activity/LoginList.styl'

class Login extends Component {
  render () {
    return (
      <div>
        <div className="aa" />
        <div className='a1'>
          <div className='w-bao'>
            <div className='w-left-div'>
              <h2>国内最优质图片灵感库</h2>
              <span>已有数百万出众网友,用花瓣保存喜欢的图片。</span>
            </div>
            <div className='w-right-div'>
              {/* 微博 */}
              <a className='weibo' href='#'>
                <div className='img' />
              </a>
              {/* qq */}
              <a className='qq' href='#'>
                <div className='img1' />
              </a>
              {/* 豆 */}
              <a className='dou' href='#'>
                <div className='img2' />
              </a>
              {/* 人人网 */}
              <a className='ren' href='#'>
                <div className='img3' />
              </a>
              <div className='w-text'>
                <div className='heng' />
                用以上社交帐号直接登录
                <div className='heng' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Login
