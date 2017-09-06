/**
 * Created by dllo on 17/9/4.
 */
import React, {Component} from 'react'
class WaterListTop extends Component {
  render () {
    return (
      <div className='waterListTopBox'>
        <div className='waterListTop'>
          <div className='waterListTop-left'>
            <div className='shareList'>
              <div className='shareList-left'>
                <button className='share1'>采集</button>
                <button className='share2'>点赞</button>
              </div>
              <div className='shareList-right'>
                <div className='share-title'>分享</div>
                <div className='share-list'>
                  <a href='' />
                  <a href='' />
                  <a href='' />
                  <div />
                </div>
                <div className='share-moreBig'>
                  <a href='' className='share-big' />
                </div>
              </div>
            </div>
            <div className='waterList-bigImg'>
              <div>
                <a href=''>
                  <img src='' alt='' className='waterList-img' />
                </a>
              </div>
              <div className='tool-bottom'>
                <div className='tool-bottomLeft'>
                  <button className='repin-btn'>
                    <i className='repin-i' />
                    采集
                  </button>
                  <button className='like-btn'>
                    <i className='like-i' />
                    喜欢
                  </button>
                  <button className='comment-btn'>
                    <i className='comment-i' />
                    评论
                  </button>
                </div>
                <div className='tool-bottomRight'>
                  <a href='' className='report-a'>
                    <i className='report-i' />
                  </a>
                  <a href='' className='source-a'>
                    <i className='source-i' />
                    查看来源 www.baidu.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='waterList-des'>
            <div className='piece'>
              <div className='info'>
                <div className='avt'>
                  <img src='' alt='' />
                </div>
                <div className='avt-box'>
                  <div className='avt-author'>
                    <a href=''>路队长</a>
                    <span>从</span>
                    <a href=''>落月</a>
                  </div>
                  <div className='ava-timeBox'>
                    转采于
                    <span className='ava-time'>39分钟前</span>
                  </div>
                </div>
              </div>
              <div className='dec'>南樛/溶图/女频都市言情总裁底图</div>
            </div>
            <div className='add-comment'>
              <div className='avatar'>
                <img src='http://img.hb.aicdn.com/654953460733026a7ef6e101404055627ad51784a95c-B6OFs4_sq75sf' alt='' />
              </div>
              <div className='add-text'>
                <form>
                  <textarea name='' id='' cols='30' rows='10' placeholder='添加评论或把采集@给好友' />
                </form>
                <div className='add-post'>
                  <a href=''>添加评论</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='waterListTop-right'>
          <div className='waterList-fall'>
            <div className='avt1'>
              <img src='' alt='' />
            </div>
            <div className='avt2'>
              <div className='avt1-author1'>
                <a href=''>路队长之总裁系列</a>
              </div>
              <div className='avt1-author2'>路队长</div>
            </div>
          </div>
          <div className='waterList-ad'>瀑布流</div>
          <div className='waterList-tit'>
            <button>关注画板</button>
          </div>
        </div>
      </div>
    )
  }
}
export default WaterListTop
