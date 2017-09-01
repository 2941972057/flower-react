/**
 * Created by dllo on 17/8/26.
 */
import React, {Component} from 'react'
import '../../assets/styles/miss/Project.styl'

class Project extends Component {
  render () {
    var TitleArr1 = []
    var ZArr1 = []
    var TextArr1 = []
    var ImgArr1 = []
    const ImgArr = ['https://muse.huaban.com/assets/a1ab466504f39d5f5bffb5719bed8eac.jpg', 'https://muse.huaban.com/assets/1f538ae318bfa87d9806bc9e2541bd40.jpg', 'https://muse.huaban.com/assets/b6155c0099b48675463d5119149b144f.jpg', 'https://muse.huaban.com/assets/d245af55a120e6b9860ea50d5a8924c6.jpg', 'https://muse.huaban.com/assets/aa2a06d7c17fdc441e93a54826a0f785.jpg', 'https://muse.huaban.com/assets/6b249a57af2c58c12ecdc99f7bd85df8.jpg', 'https://muse.huaban.com/assets/59510ec22cd567b453a0756aa60841f4.jpg', 'https://muse.huaban.com/assets/cc3d2b2e4502b44627caec5bca978a7a.jpg', 'https://muse.huaban.com/assets/7f5d67f9f4d734b1a677d8d10f227e07.jpg']
    const TitleArr = ['原创卡牌游戏海报绘制', '时尚水果品牌设计', '美食摄影/静物产品/生活方式', '梦幻插画、绘本', '插画定制服务', '网页设计、官网、电商、产品']
    const ZArr = ['周期 : 一周', '周期 : 一周', '周期 : 2周 ', '周期 : 一周', '周期 : 一周', '周期 : 2周', '周期 : 一周', '周期 : 12个月', '周期 : 3周']
    const TextArr = ['荷包蛋殿下', '天美工作室', '微弱幽兰', '猴哥MONKI', 'BabyMocmoc', 'ODT工作室', 'oELOC_小风', '僵尸诗诗', '叄児']
    for (let i = 0; i < ImgArr.length; i++) {
      ImgArr1.push(
        <a href='' className='wxj_Project_img'>
          <img src={ImgArr[i]} />
          <div className='wxj_Project_text1'>{TitleArr[i]}</div>
          <div className='wxj_Project_text2'>{ZArr[i]}</div>
          <div className='wxj_Project_text3'>{TitleArr[i]}</div>
        </a>
      )
    }
    for (let i = 0; i < TitleArr.length; i++) {
      TitleArr1.push(
        <div className='wxj_Project_text1'>{TitleArr[i]}</div>
      )
    }
    for (let i = 0; i < ZArr.length; i++) {
      ZArr1.push(
        <div className='wxj_Project_text2'>{ZArr[i]}</div>
      )
    }
    for (let i = 0; i < TextArr.length; i++) {
      TextArr1.push(
        <div className='wxj_Project_text3'>{TitleArr[i]}</div>
      )
    }
    return (
      <div className='wxj_Project'>
        <div className='wxj_Project_another1'>.</div>
        <div className='wxj_Project_contain'>
          <div className='wxj_Project_block'>
            <div className='wxj_Project_content'>
              <div className='wxj__Project_up'>
                {ImgArr1}
              </div>
              <div className='wxj_Project_down'>
                {TitleArr1}
                {ZArr1}
                {TextArr1}
              </div>
            </div>
          </div>
        </div>
        <div className='wxj_Project_dot'>
          <div className='wxj_Project_circle'>.</div>
          <div className='wxj_Project_circle'>.</div>
          <div className='wxj_Project_circle'>.</div>
        </div>
        <div className='wxj_Project_points'>
          <div className='wxj_Project_point1'>.</div>
          <div className='wxj_Project_point2'>.</div>
        </div>
      </div>
    )
  }
}
export default Project
