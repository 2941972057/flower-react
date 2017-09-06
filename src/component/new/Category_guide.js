/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'
import '../../assets/styles/new/category_guide.styl'
class CategoryGuide extends Component {
  constructor (props) {
    super(props)
    this.state = {
      guide: []
    }
  }
  componentWillMount () {
    const guide1 = [
          {title: 'UI/UX', path: 'web_app_icon'},
          {title: '平面', path: 'design'},
          {title: '插画/漫画', path: 'illustration'},
          {title: '居家/家装', path: 'home'},
          {title: '女装/搭配', path: 'apparel'},
          {title: '男士/风尚', path: 'apparel'},
          {title: '婚礼', path: 'wedding_events'}
    ]
    const guide2 = [
          {title: '工业设计', path: 'industrial_design'},
          {title: '摄影/UX', path: 'photography'},
          {title: '造型/美妆', path: 'modeling_hair'},
          {title: '美食', path: 'food_drink'},
          {title: '旅行', path: 'travel_places'},
          {title: '手工/布艺', path: 'diy_crafts'}
    ]
    const guide3 = [
          {title: '健身/舞蹈', path: 'favorite/fitness/'},
          {title: '儿童', path: 'kids'},
          {title: '宠物', path: 'pets'},
          {title: '美图', path: 'quotes'},
          {title: '明星', path: 'people'},
          {title: '美女', path: 'beauty'},
          {title: '礼物', path: 'desire'}
    ]
    const guide4 = [
          {title: '极客', path: 'geek'},
          {title: '动漫', path: 'anime'},
          {title: '建筑设计', path: 'architecture'},
          {title: '人文艺术', path: 'art'},
          {title: '数据图', path: 'data_presentation'},
          {title: '游戏', path: 'games'}
    ]
    const guide5 = [
          {title: '汽车/摩托', path: 'cars_motorcycles'},
          {title: '电影/图书', path: 'film_music_books'},
          {title: '生活百科', path: 'tips'},
          {title: '交易', path: 'education'},
          {title: '运动', path: 'sports'},
          {title: '搞笑', path: 'funny'}
    ]
    this.state.guide = [guide1, guide2, guide3, guide4, guide5]
  }
  render () {
    return (
      <div id='new-category-guide'>
        {
            this.state.guide.map((item, index) =>
              <div className='unit' key={index.toString()}>
                {
                      this.state.guide[index].map((item, index) =>
                        <a href={'favorite.html' + '?path=' + item.path + '&title=' + item.title} key={index.toString()} className='guide_list'>{item.title}</a>
                        )
                    }
              </div>
              )
          }
      </div>
    )
  }
}
export default CategoryGuide
