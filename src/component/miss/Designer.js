/**
 * Created by dllo on 17/8/26.
 */
import React, {Component} from 'react'
import '../../assets/styles/miss/Miss.styl'

class Designer extends Component {
  render () {
    return (
      <div className='wxj_designer'>
        <div className='wxj_Logos_text'>有品质的设计,来自专业的设计师</div>
        <div className='wxj_Logos_line'>__________</div>
        <div className='wxj_designer_contain'>
          <div className='wxj_designer_contain_border'>
            <div className='wxj_designer_contain_border_left' >
              <img src='https://muse.huaban.com/assets/d08821c84d88485c5679ff324046fa61.jpg' />
            </div>
            <div className='wxj_designer_contain_border_right'>
              <div className='wxj_designer_contain_header'>
                <label className='wxj_designer_label'>资深创意插画师</label>
              </div>
              <div className='wxj_designer_contain_bottom'>谛缘花视觉创意工作室创始人，蓝色光标插画美术指导，创作联想tech大会 techbaby 品牌吉祥物形象，深受行业人士喜爱。是《茶叶之路》《太湖画派》等央视的大型动画纪录片的绘画师及绘画指导。为百盛 、《开心麻花》、联想、京东、唯品会、乐视、惠金所、飞鹤、爱奇艺、百度等提供视觉插画创意服务。</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Designer
