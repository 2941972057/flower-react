/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'
import '../../assets/styles/new/category_guide.styl'
class CategoryGuide extends Component {
  constructor (props) {
    super(props)
    this.state = {
      limit: 20
    }
  }
  render () {
    const guide1 = [
        {title: 'UI/UX', path: 'web_app_icon/', data: 'api.huaban.com/favorite/web_app_icon/?limit=' + this.state.limit},
        {title: '平面', path: 'design/', data: 'api.huaban.com/favorite/design/?limit=' + this.state.limit},
        {title: '插画/漫画', path: 'illustration/', data: 'api.huaban.com/favorite/illustration/?limit=' + this.state.limit},
        {title: '居家/家装', path: 'home/', data: 'api.huaban.com/favorite/home/?limit=' + this.state.limit},
        {title: '女装/搭配', path: 'apparel/', data: 'api.huaban.com/favorite/apparel/?limit=' + this.state.limit},
        {title: '男士/风尚', path: 'apparel/', data: 'api.huaban.com/favorite/apparel/?limit=' + this.state.limit},
        {title: '婚礼', path: 'wedding_events/', data: 'api.huaban.com/favorite/wedding_events/?limit=' + this.state.limit}
    ]
    const guide2 = [
        {title: '工业设计', path: 'industrial_design/', data: 'api.huaban.com/favorite/industrial_design/?limit=' + this.state.limit},
        {title: '摄影/UX', path: 'photography/', data: 'api.huaban.com/favorite/photography/?limit=' + this.state.limit},
        {title: '造型/美妆', path: 'modeling_hair/', data: 'api.huaban.com/favorite/modeling_hair/?limit=' + this.state.limit},
        {title: '美食', path: 'food_drink/', data: 'api.huaban.com/favorite/food_drink/?limit=' + this.state.limit},
        {title: '旅行', path: 'travel_places/', data: 'api.huaban.com/favorite/travel_places/?limit=' + this.state.limit},
        {title: '手工/布艺', path: 'diy_crafts/', data: 'api.huaban.com/favorite/diy_crafts/?limit=' + this.state.limit}
    ]
    const guide3 = [
        {title: '健身/舞蹈', path: 'favorite/fitness/', data: 'api.huaban.com/favorite/fitness/?limit=' + this.state.limit},
        {title: '儿童', path: 'kids/', data: 'api.huaban.com/favorite/kids/?limit=' + this.state.limit},
        {title: '宠物', path: 'pets/', data: 'api.huaban.com/favorite/pets/?limit=' + this.state.limit},
        {title: '美图', path: 'quotes/', data: 'api.huaban.com/favorite/quotes/?limit=' + this.state.limit},
        {title: '明星', path: 'people/', data: 'api.huaban.com/favorite/people/?limit=' + this.state.limit},
        {title: '美女', path: 'beauty/', data: 'api.huaban.com/favorite/beauty/?limit=' + this.state.limit},
        {title: '礼物', path: 'desire/', data: 'api.huaban.com/favorite/desire/?limit=' + this.state.limit}
    ]
    const guide4 = [
        {title: '极客', path: 'geek/', data: 'api.huaban.com/favorite/favorite/geek/?limit=' + this.state.limit},
        {title: '动漫', path: 'anime/', data: 'api.huaban.com/favorite/anime/?limit=' + this.state.limit},
        {title: '建筑设计', path: 'architecture/', data: 'api.huaban.com/favorite/architecture/?limit=' + this.state.limit},
        {title: '人文艺术', path: 'art/', data: 'api.huaban.com/favorite/art/?limit=' + this.state.limit},
        {title: '数据图', path: 'data_presentation/', data: 'api.huaban.com/favorite/data_presentation/?limit=' + this.state.limit},
        {title: '游戏', path: 'games/', data: 'api.huaban.com/favorite/games/?limit=' + this.state.limit}
    ]
    const guide5 = [
        {title: '汽车/摩托', path: 'cars_motorcycles/', data: 'api.huaban.com/favorite/cars_motorcycles/?limit=' + this.state.limit},
        {title: '电影/图书', path: 'film_music_books/', data: 'api.huaban.com/favorite/film_music_books/?limit=' + this.state.limit},
        {title: '生活百科', path: 'tips/', data: 'api.huaban.com/favorite/tips/?limit=' + this.state.limit},
        {title: '交易', path: 'education/', data: 'api.huaban.com/favorite/education/?limit=' + this.state.limit},
        {title: '运动', path: 'sports/', data: 'api.huaban.com/favorite/sports/?limit=' + this.state.limit},
        {title: '搞笑', path: 'funny/', data: 'api.huaban.com/favorite/funny/?limit=' + this.state.limit}
    ]
    return (
      <div id='new-category-guide'>
        <div className='unit'>
          {
                guide1.map((item, index) => <a href='favorite.html' key={index.toString()} className='guide_list'>{item.title}</a>)
            }
        </div>
        <div className='unit'>
          {
                  guide2.map((item, index) => <a href='favorite.html' key={index.toString()} className='guide_list'>{item.title}</a>)
              }
        </div>
        <div className='unit'>
          {
                  guide3.map((item, index) => <a href='favorite.html' key={index.toString()} className='guide_list'>{item.title}</a>)
              }
        </div>
        <div className='unit'>
          {
                  guide4.map((item, index) => <a href='favorite.html' key={index.toString()} className='guide_list'>{item.title}</a>)
              }
        </div>
        <div className='unit last'>
          {
                  guide5.map((item, index) => <a href='favorite.html' key={index.toString()} className='guide_list'>{item.title}</a>)
              }
        </div>
      </div>
    )
  }
}
export default CategoryGuide
