/**
 * Created by dllo on 17/8/28.
 */
import React, {Component} from 'react'
import '../../assets/styles/activity/ShowLogin.styl'
class ShowLogin extends Component {
  componentDidMount () {
    document.body.onscroll = this.scroll
  }
  scroll = () => {
    if (document.body.scrollTop > 100) {
      let Scroll = document.getElementById('yin')
      Scroll.style.display = 'block'
    } else {
      let Scroll = document.getElementById('yin')
      Scroll.style.display = 'none'
    }
  }

  render () {
    return (
      <div>
        <div id='yin' onScroll={this.scroll}>
          <div className='bao-show-Login'>
            {/* 左侧文字 */}
            <div className='show-text'>
              <h3>国内最优质图片灵感库</h3>
              <span>已有数百万出众网友,用花瓣保存喜欢的图片。</span>
            </div>
            {/* 右侧界面 */}
            <div className='show-img'>
              <span>用社交帐号直接登录：</span>
              {/* 微博 */}
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
      </div>
    )
  }
}
export default ShowLogin
