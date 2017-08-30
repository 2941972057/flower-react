/**
 * Created by dllo on 17/8/23.
 */
import React, {Component} from 'react'
// 头部样式
import '../../assets/styles/new/Header.styl'
// 内容区样式
import '../../assets/styles/new/Category.styl'
import '../../assets/styles/new/WaterFall.styl'
// 头部导航组件
import Nav from '../../component/nav/Nav'
// 头部广告组件
import Ad from '../../component/advertising/Ad'
// 头部大图片组件
import HeaderLogoImg from '../../component/headerBigImg/HeaderLogoImg'
// 内容区分类组件
import CategoryGuide from '../../component/new/Category_guide'
// 内容区风格组件
import CategoryImg from '../../component/new/Category_img'
// 内容区瀑布流组件
import WaterFall from '../../component/new/WaterFall'
class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        <Ad />
        <HeaderLogoImg />
        <CategoryGuide />
        <CategoryImg />
        <WaterFall />
      </div>
    )
  }
}
export default App
