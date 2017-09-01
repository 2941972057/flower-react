/**
 * Created by dllo on 17/8/26.
 */
import React, {Component} from 'react'
import '../../assets/styles/miss/Price.styl'

class Price extends Component {
  render () {
    return (
      <div>
        <div className='wxj_Logos_price'>
          <div className='wxj_Logos_price_p'>
            <span className='wxj_Logos_gang1'>_____________</span>
            <span className='wxj_Logos_gang2'>_____________</span>
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
            <div className='wxj_Logos_price_next'>即将推出如需预约,请联系经纪人</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Price
