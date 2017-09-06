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
            <a className='show-weibo' href='https://api.weibo.com/oauth2/authorize?client_id=2499394483&response_type=code&redirect_uri=http%3A%2F%2Fhuaban.com%2Foauth%2Fcallback%2F&display=default'>
              <div className='weibo-img' />
              <div className='show-meng' />
            </a>
            <a className='show-qq' href='https://graph.qq.com/oauth/show?which=Login&display=pc&client_id=100240394&response_type=code&redirect_uri=https%3A%2F%2Fhuaban.com%2Foauth%2Fcallback%2F&scope=get_user_info%2Cadd_topic%2Cget_info%2Cget_fanslist%2Cget_idolist%2Cadd_idol%2Ccheck_page_fans'>
              <div className='qq-img' />
              <div className='show-meng' />
            </a>
            <a className='show-dou' href='https://www.douban.com/service/auth2/auth?client_id=0dc8f880d70527ff295ae982850f77fd&response_type=code&redirect_uri=http%3A%2F%2Fhuaban.com%2Foauth%2Fcallback%2F'>
              <div className='dou-img' />
              <div className='show-meng' />
            </a>
            <a className='show-ren' href='http://graph.renren.com/oauth/grant?client_id=4dabeb4836e8467a9d212d0fea33da7a&redirect_uri=https%3A%2F%2Fhuaban.com%2Foauth%2Fcallback%2F&response_type=code&display=page&scope=publish_share+status_update+publish_feed+photo_upload&secure=true&origin=00000'>
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
