/**
 * Created by dllo on 17/8/23.
 */
import React, {Component} from 'react'
import '../../assets/styles/miss/Miss.styl'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    fetch('/api/api/v1/users', {
      method: 'GET'
    })
            .then(response => {
              return response.json()
            })
        .then(response => {
          console.log(response)
          this.setState({
            data: response
          })
        })
  }
  render () {
    return (
      <div>
        <div className='wxj_Top'>
          <div className='wxj_Top_nav'>
            <ul className='wxj_Top_ul'>
              <li className='wxj_Top_l1'>.</li>
              <li className='wxj_Top_l2'>首页</li>
              <li className='wxj_Top_l3'>设计服务</li>
              <li className='wxj_Top_l4'>设计师</li>
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
        <div className='wxj_Logos'>
          <div className='wxj_Logos_text'>花瓣美思,有品质的服务设计平台</div>
          <div className='wxj_Logos_logo'>
            <div className='wxj_Logos_logo1'>
              <img className='wxj_Logos_logo1_img' src='https://muse.huaban.com/assets/d3d8fc14f58efa853f0fe1d0e645a2cc.svg' />
              <p className='wxj_Logos_title'>高质量</p>
              <p className='wxj_Logos_circles'>美思选择设计师的三好标准：设计好、人品好、态度好。有三好，质量自然好。</p>
            </div>
            <div className='wxj_Logos_logo1'>
              <img className='wxj_Logos_logo1_img' src='https://muse.huaban.com/assets/bdf6cd353ed3b93ae768fca32824c4b3.svg' />
              <p className='wxj_Logos_title'>高效率</p>
              <p className='wxj_Logos_circles'>专业的设计师，专业的经纪团队，带来最高效的设计服务，绝不拖延您的项目进度.</p>
            </div>
            <div className='wxj_Logos_logo1'>
              <img className='wxj_Logos_logo1_img' src='https://muse.huaban.com/assets/47d13aea77bf90572fb20d41de782c17.svg' />
              <p className='wxj_Logos_title'>无风险</p>
              <p className='wxj_Logos_circles'>您在美思购买的设计，由视觉中国版权事业部提供版权风险保障。</p>
            </div>
            <div className='wxj_Logos_logo1'>
              <img className='wxj_Logos_logo1_img' src='https://muse.huaban.com/assets/756d24d9a959a6320da63cd891075d85.svg' />
              <p className='wxj_Logos_title'>超省心</p>
              <p className='wxj_Logos_circles'>交稿延期、消极改稿、交易争议等设计服务中让人头疼的问题，在花瓣美思绝对不会出现。</p>
            </div>
          </div>
        </div>
        <div className='wxj_Logos_shows'>
          <div className='wxj_Logos_text_another'>马上找到您需要的设计师</div>
          <div className='wxj_Logos_line'>__________</div>
          <div className='wxj_show_contain'>
            <div className='wxj_show_picture'>
              <img src='https://muse.huaban.com/assets/a14480f1804faebc9f5263f71240fb2f.svg' />
              <p className='wxj_show_text'>插画绘制</p>
            </div>
            <div className='wxj_show_picture'>
              <img src='https://muse.huaban.com/assets/79ac425ff7e459d92358768d022f906b.svg' />
              <p className='wxj_show_text'>工业设计产品</p>
            </div>
            <div className='wxj_show_picture'>
              <img src='https://muse.huaban.com/assets/a14480f1804faebc9f5263f71240fb2f.svg' />
              <p className='wxj_show_text'>设计网页</p>
            </div>
            <div className='wxj_show_picture'>
              <img src='https://muse.huaban.com/assets/081a314ad4b093b77eaa1a8bb962f706.svg' />
              <p className='wxj_show_text'>设计H5页面</p>
            </div>
            <div className='wxj_show_picture'>
              <img src='https://muse.huaban.com/assets/588b01902b4054c95e9dc76a5a6300f9.svg' />
              <p className='wxj_show_text'>设计LOGO</p>
            </div>
            <div className='wxj_show_picture'>
              <img src='https://muse.huaban.com/assets/77012a81d858f58fcfbf5eadf9a0fc7b.svg' />
              <p className='wxj_show_text'>设计印刷品</p>
            </div>
            <div className='wxj_show_picture'>
              <img src='https://muse.huaban.com/assets/77012a81d858f58fcfbf5eadf9a0fc7b.svg' />
              <p className='wxj_show_text'>设计产品包装</p>
            </div>
            <div className='wxj_show_picture'>
              <img src='https://muse.huaban.com/assets/f11c98f0e0db8dd6e59e5901b3ab390a.svg' />
              <p className='wxj_show_text'>设计VI系统</p>
            </div>
            <div className='wxj_show_picture'>
              <img src='https://muse.huaban.com/assets/7a42f0b10fed55a4f7d7dcea5901f915.svg' />
              <p className='wxj_show_text'>设计活动页面</p>
            </div>
            <div className='wxj_show_picture'>
              <img src='https://muse.huaban.com/assets/1d36d2ffb2b52b4b379e0ad030f76b57.svg' />
              <p className='wxj_show_text'>摄影</p>
            </div>
            <div className='wxj_show_picture'>
              <img src='https://muse.huaban.com/assets/09d32d90817a508b6a130db007a815d4.svg' />
              <p className='wxj_show_text'>设计吉祥物</p>
            </div>
            <div className='wxj_show_picture'>
              <img src='https://muse.huaban.com/assets/4ab1d822335d1dcba8623ebc935af48f.svg' />
              <p className='wxj_show_text'>室内设计</p>
            </div>
            <div className='wxj_Logos_find'>找不到您要的分类?</div>
            <div className='wxj_Logos_btn'>浏览所有分类</div>
          </div>
        </div>
        <div className='wxj_Logos_price'>
          <div className='wxj_Logos_text_another'>
            <p className='wxj_Logos_gang1'>.</p>
            <p className='wxj_Logos_price_p'>联合设计中心</p>
            <p className='wxj_Logos_gang2'>.</p>
          </div>
          <div className='wxj_Logos_price_contain'>
            <div className='wxj_Logos_price_pic'>
              <img src='https://muse.huaban.com/assets/35d3df4f034d9991c1c1318c46644da2.svg' className='wxj_Logos_price_img' />
              <p className='wxj_Logos_price_p1'>红星奖设计中心</p>
              <p className='wxj_Logos_price_p2'>中国设计最高奖项</p>
              <p className='wxj_Logos_price_p3'>______</p>
              <p className='wxj_Logos_price_p4'>领域：工业/产业设计</p>
            </div>
            <div className='wxj_Logos_price_pic'>
              <img src='https://muse.huaban.com/assets/0f9fdfb72266bf0a841c2b033c3f5ace.svg' className='wxj_Logos_price_img' />
              <p className='wxj_Logos_price_p1'>IXDC 设计中心</p>
              <p className='wxj_Logos_price_p2'>著名用户体验设计组织</p>
              <p className='wxj_Logos_price_p3'>______</p>
              <p className='wxj_Logos_price_p4'>领域：UI/UE设计</p>
            </div>
            <div className='wxj_Logos_price_pic'>
              <img src='https://muse.huaban.com/assets/d109fc94ed96e550fff99979a0404910.svg' className='wxj_Logos_price_img' />
              <p className='wxj_Logos_price_p1'>CGWorld 设计中心</p>
              <p className='wxj_Logos_price_p2'>国内著名 CG 杂志</p>
              <p className='wxj_Logos_price_p3'>______</p>
              <p className='wxj_Logos_price_p4'>领域：动漫/影视</p>
            </div>
          </div>
          <div className='wxj_Logos_price_next'>即将推出如需预约,请联系经纪人</div>
        </div>
      </div>
    )
  }
}
export default App
