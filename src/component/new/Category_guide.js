/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'

class CategoryGuide extends Component {
  render () {
    const guide1 = ['UI/UX', '平面', '插画/漫画', '居家/家装', '女装/搭配', '男士/风尚', '婚礼']
    const guide2 = ['工业设计', '摄影', '造型/美妆', '美食', '旅行', '手工/布艺']
    const guide3 = ['健身', '儿童', '宠物', '美图', '明星', '美女', '礼物']
    const guide4 = ['极客', '动漫', '建筑设计', '人文艺术', '数据图', '游戏']
    const guide5 = ['汽车/摩托', '电影/图书', '生活百科', '交易', '运动', '搞笑']
    return (
      <div id='new-category-guide'>
        <div className='unit'>
          {
                guide1.map((item, index) => <a href='' key={index.toString()} className='guide_list'>{item}</a>)
            }
        </div>
        <div className='unit'>
          {
                  guide2.map((item, index) => <a href='' key={index.toString()} className='guide_list'>{item}</a>)
              }
        </div>
        <div className='unit'>
          {
                  guide3.map((item, index) => <a href='' key={index.toString()} className='guide_list'>{item}</a>)
              }
        </div>
        <div className='unit'>
          {
                  guide4.map((item, index) => <a href='' key={index.toString()} className='guide_list'>{item}</a>)
              }
        </div>
        <div className='unit last'>
          {
                  guide5.map((item, index) => <a href='' key={index.toString()} className='guide_list'>{item}</a>)
              }
        </div>
      </div>
    )
  }
}
export default CategoryGuide
