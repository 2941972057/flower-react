/**
 * Created by dllo on 17/8/30.
 */
import React, {Component} from 'react'
import '../../../assets/styles/common/headerLoginList/loginShow.styl'
class HeaderLoginShow extends Component {
  render () {
    return (
      <div id='yin'>
        <div className='bao-show-Login'>
          <div className='show-text'>
            <h3>国内最优质图片灵感库</h3>
            <span>已有数百万出众网友,用花瓣保存喜欢的图片。</span>
          </div>
          <div className='show-img'>
            <span>用社交帐号直接登录：</span>
            <a className='show-weibo' href='#'>
              <div className='weibo-img' />
              <div className='show-meng' />
            </a>
            <a className='show-qq' href='#'>
              <div className='qq-img' />
              <div className='show-meng' />
            </a>
            <a className='show-dou' href='#'>
              <div className='dou-img' />
              <div className='show-meng' />
            </a>
            <a className='show-ren' href='#'>
              <div className='ren-img' />
              <div className='show-meng' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default HeaderLoginShow
