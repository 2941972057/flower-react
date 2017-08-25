/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'
import Img1 from '../../assets/images/new/7.jpg'
import Img2 from '../../assets/images/new/8.png'
class WaterFall extends Component {
  render () {
    return (
      <div id='new-waterFall'>
        <div id='water-ad1' className='wf-list'>广告</div>
        <div id='water-ad2' className='wf-list'>
          <a href=''>
            <img src={Img1} alt='' />
            <div className='cover' />
          </a>
          <div className='wf-activity'>活动</div>
        </div>
        <div id='water-ad3' className='wf-list'>
          <a href=''>
            <img src={Img2} alt='' />
            <div className='cover' />
          </a>
          <div className='wf-activity'>活动</div>
        </div>
        <div className='water-list'>
          <div className='wf-list'>
            <a href=''>
              <img src='' alt='' />
              <div className='cover' />
            </a>
            <div className='collection'>采集</div>
            <div className='thumbs'>点赞</div>
          </div>
          <div className='water-text'>
            <div className='water-title'>介绍</div>
            <div className='water-desc'>
              <div className='water-author-image'>
                <img src='' alt='' />
              </div>
              <div className='author-box'>
                <span><a href='' className='author1'>谁</a></span>
                <span>采集到了</span>
                <span><a href='' className='author2'>谁</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default WaterFall
