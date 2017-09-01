/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import '../../assets/styles/more/PagePilot.styl'

class Page extends Component {
  render () {
    return (
      <div>
        <div className='w-more'>
          <div className='w-more-head'>
            <a href='#'>花瓣live</a>
            <a href='mobile.html'>移动应用</a>
            <a href='#'>采集工具</a>
          </div>
          <div className='more-bao'>
            <div className='w-more-left'>
              <a href='#'>UI/UX</a>
              <a href='#'>平面</a>
              <a href='#'>插画/漫画</a>
              <a href='#'>家具/家装</a>
              <a href='#'>女装/搭配</a>
            </div>
            <div className='more-right'>
              <a href='#'>男士/风尚</a>
              <a href='#'>婚礼</a>
              <a href='#'>工业设计</a>
              <a href='#'>摄影</a>
              <a href='#'>兴趣/生活 »</a>
            </div>
          </div>
          <div className='w-more-foot'>
            <div className='w-more-img' />
            <div className='w-more-text'>
              <a href=''>关于</a>
              <span>·</span>
              <a href=''>反馈</a>
              <span>·</span>
              <a href=''>博客</a>
            </div>
          </div>
          <div className='w-up' />
        </div>
      </div>
    )
  }
}
export default Page
