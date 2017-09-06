/**
 * Created by dllo on 17/9/5.
 */
import React, {Component} from 'react'
import '../../assets/styles/waterFall/WaterFall.styl'
class WaterListFall extends Component {
  constructor (props) {
    super(props)
    this.state = {
      arrList: []
    }
  }
  render () {
    return (
      <div id='waterListFall'>
        <div id='new-waterFall'>
          <div id='water-ad1'>
            <div id='ad-box'>
              <div id='ad-box1'>广告位招租</div>
              <div id='ad-box2'>一天一万, 包月九折!</div>
            </div>
          </div>
          <div>
            {
                      this.state.arrList.map((item, index) =>
                        <div className='water-list' key={index}>
                          <div className='wf-list'>
                            <div>
                              <img src={item.bigImg} alt='' className='bigImg' style={{height: 236 * item.bHeight / item.bWidth}} />
                              <div className='cover' onClick={this.click} />
                            </div>
                            <div className='collection'>采集</div>
                            <div className='thumbs'>点赞</div>
                          </div>
                          <div className='water-text'>
                            {
                                      item.title.length === 0
                                          ? <div />
                                          : <div className='water-title'>{item.title}</div>
                                  }
                            <div className='water-desc'>
                              <div className='water-author-image'>
                                <img src={item.smallImg} alt='' />
                              </div>
                              <div className='author-box'>
                                <a href='#' className='author1'>{item.username1}</a>
                                          采集到了
                                          <a href='' className='author2'>{item.username2}</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                  }
          </div>
        </div>
      </div>
    )
  }
}
export default WaterListFall
