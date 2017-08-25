/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'
import Img1 from '../../assets/images/new/1.png'
import Img2 from '../../assets/images/new/2.jpg'
import Img3 from '../../assets/images/new/3.jpg'
import Img4 from '../../assets/images/new/4.jpg'
import Img5 from '../../assets/images/new/5.jpg'
import Img6 from '../../assets/images/new/6.jpg'

class CategoryImg extends Component {
  render () {
    return (
      <div id='new-category-img'>
        <a href='' className='category-image'>
          <img src={Img1} alt='' />
        </a>
        <a href='' className='category-image'>
          <img src={Img2} alt='' />
        </a>
        <a href='' className='category-image'>
          <img src={Img3} alt='' />
        </a>
        <a href='' className='category-image'>
          <img src={Img4} alt='' />
        </a>
        <a href='' className='category-image'>
          <img src={Img5} alt='' />
        </a>
        <a href='' className='category-image'>
          <img src={Img6} alt='' />
        </a>
      </div>
    )
  }
}
export default CategoryImg
