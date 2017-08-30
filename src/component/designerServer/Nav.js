/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import '../../assets/styles/miss/Miss.styl'

class Nav extends Component {
  render () {
    return (
      <div className='wxj_nav_all'>
        <ul className='wxj_nav'>
          <a href='' style={{width: '46px', height: '19px'}}><li>分类:</li></a>
          <a href='' style={{width: '28px', height: '19px'}}><li>全部</li></a>
          <a href='' style={{width: '76px', height: '19px'}}><li>LOGO/品牌</li></a>
          <a href='' style={{width: '56px', height: '19px'}}><li>平面设计</li></a>
          <a href='' style={{width: '75px', height: '19px'}}><li>UI设计</li></a>
          <a href='' style={{width: '63px', height: '19px'}}><li>绘画/插画</li></a>
          <a href='' style={{width: '91px', height: '19px'}}><li>工业/产品设计</li></a>
          <a href='' style={{width: '68px', height: '19px'}}><li>影视/动画</li></a>
          <a href='' style={{width: '56px', height: '19px'}}><li>服装设计</li></a>
          <a href='' style={{width: '56px', height: '19px'}}><li>室内设计</li></a>
          <a href='' style={{width: '56px', height: '19px'}}><li>造型设计</li></a>
          <a href='' style={{width: '56px', height: '19px'}}><li>私家定制</li></a>
          <a href='' style={{width: '28px', height: '19px'}}><li>其他</li></a>
        </ul>
        <ul className='wxj_nav1'>
          <a href='' style={{width: '56px', height: '19px'}}><li>子类:</li></a>
          <a href='' style={{width: '56px', height: '19px'}}><li>插画设计</li></a>
          <a href='' style={{width: '56px', height: '19px'}}><li>原画设计</li></a>
          <a href='' style={{width: '56px', height: '19px'}}><li>漫画设计</li></a>
          <a href='' style={{width: '80px', height: '19px'}}><li>形象/吉祥物</li></a>
          <a href='' style={{width: '84px', height: '19px'}}><li>其他插画艺术</li></a>
        </ul>
      </div>
    )
  }
}
export default Nav
