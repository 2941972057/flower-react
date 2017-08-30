/**
 * Created by dllo on 17/8/26.
 */
import React, {Component} from 'react'
import '../../assets/styles/miss/Miss.styl'

class Logos extends Component {
  render () {
    return (
      <div className='wxj_Logos'>
        <div className='wxj_Logos_text'>花瓣美思,有品质的服务设计平台</div>
        <div className='wxj_Logos_logo'>
          <div className='wxj_Logos_logo1'>
            <img className='wxj_Logos_logo1_img' src='https://muse.huaban.com/assets/d3d8fc14f58efa853f0fe1d0e645a2cc.svg' />
            <p className='wxj_Logos_title'>高质量</p>
            <p className='wxj_Logos_circles'>美思选择设计师的三好标准：设计好、人品好、态度好。有三好，质量自然好。</p>
          </div>
          <div className='wxj_Logos_logo1'>
            <img className='wxj_Logos_logo1_img' src='https://muse.huaban.com/assets/bdf6cd353ed3b93ae768fca32824c4b3.svg' />
            <p className='wxj_Logos_title'>高效率</p>
            <p className='wxj_Logos_circles'>专业的设计师，专业的经纪团队，带来最高效的设计服务，绝不拖延您的项目进度.</p>
          </div>
          <div className='wxj_Logos_logo1'>
            <img className='wxj_Logos_logo1_img' src='https://muse.huaban.com/assets/47d13aea77bf90572fb20d41de782c17.svg' />
            <p className='wxj_Logos_title'>无风险</p>
            <p className='wxj_Logos_circles'>您在美思购买的设计，由视觉中国版权事业部提供版权风险保障。</p>
          </div>
          <div className='wxj_Logos_logo1'>
            <img className='wxj_Logos_logo1_img' src='https://muse.huaban.com/assets/756d24d9a959a6320da63cd891075d85.svg' />
            <p className='wxj_Logos_title'>超省心</p>
            <p className='wxj_Logos_circles'>交稿延期、消极改稿、交易争议等设计服务中让人头疼的问题，在花瓣美思绝对不会出现。</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Logos
