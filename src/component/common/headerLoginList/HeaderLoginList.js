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
              <a className='weibo' href='https://api.weibo.com/oauth2/authorize?client_id=2499394483&response_type=code&redirect_uri=http%3A%2F%2Fhuaban.com%2Foauth%2Fcallback%2F&display=default'>
                <div className='img' />
              </a>
              <a className='qq' href='https://graph.qq.com/oauth/show?which=Login&display=pc&client_id=100240394&response_type=code&redirect_uri=https%3A%2F%2Fhuaban.com%2Foauth%2Fcallback%2F&scope=get_user_info%2Cadd_topic%2Cget_info%2Cget_fanslist%2Cget_idolist%2Cadd_idol%2Ccheck_page_fans'>
                <div className='img1' />
              </a>
              <a className='dou' href='https://www.douban.com/service/auth2/auth?client_id=0dc8f880d70527ff295ae982850f77fd&response_type=code&redirect_uri=http%3A%2F%2Fhuaban.com%2Foauth%2Fcallback%2F'>
                <div className='img2' />
              </a>
              <a className='ren' href='http://graph.renren.com/oauth/grant?client_id=4dabeb4836e8467a9d212d0fea33da7a&redirect_uri=https%3A%2F%2Fhuaban.com%2Foauth%2Fcallback%2F&response_type=code&display=page&scope=publish_share+status_update+publish_feed+photo_upload&secure=true&origin=00000'>
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
