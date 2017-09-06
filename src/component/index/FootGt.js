/**
 * Created by dllo on 17/8/28.
 */
import React, {Component} from 'react'
import '../../assets/styles/index/FootGt.styl'
class FootGt extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: 2
    }
  }
  render () {
    return (
      <div className='GFoot' >
        <div className='FootLine'>
          <div>以分类浏览花瓣</div>
          <div><a href='#'>所有采集</a></div>
        </div>
        <div className='FootText'>
          <ul className='groupUl'>
            <li><a href='#'>UI/UX</a></li>
            <li><a href='#'>平面</a></li>
            <a href='#'><li>插画/漫画</li></a>
            <a href='#'><li>家居/家装</li></a>
            <a href='#'><li>女装/搭配</li></a>
            <a href='#'><li>男士/风尚</li></a>
            <a href='#'><li>婚礼</li></a>
          </ul>
          <ul className='groupUl'>
            <a href='#'><li>工业设计</li></a>
            <a href='#'><li>摄影</li></a>
            <a href='#'><li>造型/美妆</li></a>
            <a href='#'><li>美食</li></a>
            <a href='#'><li>旅行</li></a>
            <a href='#'><li>手工/布艺</li></a>
            <a href='#'><li>健身舞蹈</li></a>
          </ul>
          <ul className='groupUl'>
            <a href='#'><li>儿童</li></a>
            <a href='#'><li>宠物</li></a>
            <a href='#'><li>美图</li></a>
            <a href='#'><li>明星</li></a>
            <a href='#'><li>美女</li></a>
            <a href='#'><li>礼物</li></a>
            <a href='#'><li>极客</li></a>
          </ul>
          <ul className='groupUl'>
            <a href='#'><li>动漫</li></a>
            <a href='#'><li>建筑设计</li></a>
            <a href='#'><li>人文艺术</li></a>
            <a href='#'><li>数据图</li></a>
            <a href='#'><li>游戏</li></a>
            <a href='#'><li>汽车/摩托</li></a>
            <a href='#'><li>电影/图书</li></a>
          </ul>
          <ul className='groupUl'>
            <a href='#'><li>生活百科</li></a>
            <a href='#'><li>教育</li></a>
            <a href='#'><li>运动</li></a>
            <a href='#'><li>搞笑</li></a>
          </ul>
        </div>
      </div>
    )
  }
}
export default FootGt
