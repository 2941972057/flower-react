/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import '../../assets/styles/miss/Miss.styl'
const logoArr = ['子类:', '网页设计App', '设计移动网页/H5 页面设计', '活动页面设计', 'icon设计', 'banner 设计', '其它 UI 设计']
class DesignerNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      array: []
    }
  }
  clickLogo = () => {
    console.log(123)
    var navChild = document.getElementsByClassName('wxj_nav1')[0]
    navChild.innerHTML = ''
    for (let i = 0; i < logoArr.length; i++) {
      var aBiaoQian = document.createElement('a')
      navChild.appendChild(aBiaoQian)
      var liBiaoQian = document.createElement('li')
      liBiaoQian.innerHTML = logoArr[i]
      aBiaoQian.appendChild(liBiaoQian)
    }
  }
  render () {
    return (
      <div style={{backgroundColor: 'grey'}}>
        <div className='wxj_nav_all_HOVER'>
          <ul className='wxj_nav_HOVER'>
            <a style={{width: '46px', height: '19px'}}><li>分类:</li></a>
            <a style={{width: '28px', height: '19px'}}><li>全部</li></a>
            <a style={{width: '76px', height: '19px'}}><li onClick={this.clickLogo} className='kang'>LOGO/品牌</li></a>
            <a style={{width: '56px', height: '19px'}}><li>平面设计</li></a>
            <a style={{width: '75px', height: '19px'}}><li>UI设计</li></a>
            <a style={{width: '63px', height: '19px'}}><li>绘画/插画</li></a>
            <a style={{width: '91px', height: '19px'}}><li>工业/产品设计</li></a>
            <a style={{width: '68px', height: '19px'}}><li>影视/动画</li></a>
            <a style={{width: '56px', height: '19px'}}><li>服装设计</li></a>
            <a style={{width: '56px', height: '19px'}}><li>室内设计</li></a>
            <a style={{width: '56px', height: '19px'}}><li>造型设计</li></a>
            <a style={{width: '56px', height: '19px'}}><li>私家定制</li></a>
            <a style={{width: '28px', height: '19px'}}><li>其他</li></a>
          </ul>
          <ul className='wxj_nav1'>
            <a style={{width: '56px', height: '19px'}}><li>子类:</li></a>
            <a style={{width: '56px', height: '19px'}}><li>插画设计</li></a>
            <a style={{width: '56px', height: '19px'}}><li>原画设计</li></a>
            <a style={{width: '56px', height: '19px'}}><li>漫画设计</li></a>
            <a style={{width: '80px', height: '19px'}}><li>形象/吉祥物</li></a>
            <a style={{width: '84px', height: '19px'}}><li>其他插画艺术</li></a>
          </ul>
        </div>
      </div>
    )
  }
}
export default DesignerNav
