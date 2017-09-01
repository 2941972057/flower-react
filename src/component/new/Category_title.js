/**
 * Created by dllo on 17/9/1.
 */
import React, {Component} from 'react'
import '../../assets/styles/new/category_title.styl'
class CategoryTitle extends Component {
  render () {
    return (
      <div id='wrapper-box'>
        <div id='wrapper'>
          <div id='wrapper-title-box'>
            <div className='wrapper-line' />
            <div id='wrapper-title'>儿童</div>
            <div className='wrapper-line' />
          </div>
          <div id='navs'>
            <a href='' className='theLine'>采集</a>
            <a href=''>推荐画板</a>
            <a href=''>推荐用户</a>
          </div>
        </div>
      </div>
    )
  }
}
export default CategoryTitle
