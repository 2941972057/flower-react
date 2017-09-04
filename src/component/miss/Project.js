/**
 * Created by dllo on 17/8/26.
 */
import React, {Component} from 'react'
import '../../assets/styles/miss/Project.styl'

class Project extends Component {
  clickLeft = () => {
    var oWrap = document.getElementsByClassName('wxj_Project_content')[0]
    console.log(oWrap.offsetLeft)
    oWrap.style.left = oWrap.offsetLeft + (380 * 3 + 10 * 3 + 10) + 'px'
    var chooses = document.getElementsByClassName('wxj_Project_circle')
    console.log(chooses)
    if (oWrap.offsetLeft === 0) {
      oWrap.style.left = -2360 + 'px'
      for (let i = 0; i < chooses.length; i++) {
        chooses[i].style.backgroundColor = '#fff'
      }
      chooses[2].style.backgroundColor = 'lightgrey'
    }
    if (oWrap.offsetLeft === -1180) {
      for (let i = 0; i < chooses.length; i++) {
        chooses[i].style.backgroundColor = '#fff'
      }
      chooses[0].style.backgroundColor = 'lightgrey'
    }
    if (oWrap.offsetLeft === -2360) {
      for (let i = 0; i < chooses.length; i++) {
        chooses[i].style.backgroundColor = '#fff'
      }
      chooses[1].style.backgroundColor = 'lightgrey'
    }
  }
  clickRight = () => {
    var oWrap = document.getElementsByClassName('wxj_Project_content')[0]
    var chooses = document.getElementsByClassName('wxj_Project_circle')
    console.log(oWrap.offsetLeft)
    oWrap.style.left = oWrap.offsetLeft - (380 * 3 + 10 * 3 + 10) + 'px'
    if (oWrap.offsetLeft === -2360) {
      oWrap.style.left = 0
      for (let i = 0; i < chooses.length; i++) {
        chooses[i].style.backgroundColor = '#fff'
      }
      chooses[0].style.backgroundColor = 'lightgrey'
    }
    if (oWrap.offsetLeft === 0) {
      for (let i = 0; i < chooses.length; i++) {
        chooses[i].style.backgroundColor = '#fff'
      }
      chooses[1].style.backgroundColor = 'lightgrey'
    }
    if (oWrap.offsetLeft === -1180) {
      for (let i = 0; i < chooses.length; i++) {
        chooses[i].style.backgroundColor = '#fff'
      }
      chooses[2].style.backgroundColor = 'lightgrey'
    }
  }
  one = () => {
    var oWrap = document.getElementsByClassName('wxj_Project_content')[0]
    var chooses = document.getElementsByClassName('wxj_Project_circle')
    for (let i = 0; i < chooses.length; i++) {
      chooses[i].style.backgroundColor = '#fff'
    }
    chooses[0].style.backgroundColor = 'lightgrey'
    oWrap.style.left = 0
  }
  two = () => {
    var oWrap = document.getElementsByClassName('wxj_Project_content')[0]
    var chooses = document.getElementsByClassName('wxj_Project_circle')
    for (let i = 0; i < chooses.length; i++) {
      chooses[i].style.backgroundColor = '#fff'
    }
    chooses[1].style.backgroundColor = 'lightgrey'
    oWrap.style.left = -1180 + 'px'
  }
  three = () => {
    var oWrap = document.getElementsByClassName('wxj_Project_content')[0]
    var chooses = document.getElementsByClassName('wxj_Project_circle')
    for (let i = 0; i < chooses.length; i++) {
      chooses[i].style.backgroundColor = '#fff'
    }
    chooses[2].style.backgroundColor = 'lightgrey'
    oWrap.style.left = -2360 + 'px'
  }
  render () {
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
          <div className='wxj_Project_text4'>{TextArr[i]}</div>
        </a>
      )
    }
    return (
      <div className='wxj_Project'>
        <div className='wxj_Project_another1' />
        <div className='wxj_Logos_line' />
        <div className='wxj_Project_contain'>
          <div className='wxj_Project_points'>
            <div className='wxj_Project_point1' onClick={this.clickLeft} />
            <div className='wxj_Project_point2' onClick={this.clickRight} />
          </div>
          <div className='wxj_Project_block'>
            <div className='wxj_Project_content'>
              <div className='wxj__Project_up'>
                {ImgArr1}
              </div>
            </div>
          </div>
        </div>
        <div className='wxj_Project_dot'>
          <div className='wxj_Project_circle' onClick={this.one} />
          <div className='wxj_Project_circle' onClick={this.two} />
          <div className='wxj_Project_circle' onClick={this.three} />
        </div>
      </div>
    )
  }
}
export default Project
