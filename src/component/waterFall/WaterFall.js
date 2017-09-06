/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'
import '../../assets/styles/waterFall/WaterFall.styl'
class WaterFall extends Component {
  constructor (props) {
    super(props)
    this.state = {
      arrList: [],
      pinId: '',
      boardId: ''
    }
  }
  componentWillReceiveProps (props) {
    let theProps = props
    const arr = theProps.data
    for (const key in arr) {
      var username = ''
      if (arr[key].via_user) {
        username = arr[key].via_user.username
      } else {
        username = '花瓣宝宝'
      }
      const list = {
        Id: {
          pinId: arr[key].pin_id,
          boardId: arr[key].board.board_id
        },
        bigImg: 'http://img.hb.aicdn.com/' + arr[key].file.key,
        bWidth: arr[key].file.width,
        bHeight: arr[key].file.height,
        smallImg: 'http://img.hb.aicdn.com/' + arr[key].user.avatar.key,
        sWidth: arr[key].user.avatar.width,
        sHeight: arr[key].user.avatar.height,
        title: arr[key].raw_text,
        username1: arr[key].user.username,
        username2: username
      }
      this.state.arrList.push(list)
    }
  }
  componentDidUpdate () {
    waterFall()
    window.onresize = function () {
      waterFall()
    }
    function waterFall () {
      var oWaterFall = document.getElementById('new-waterFall')
      var oWaterList = document.getElementsByClassName('water-list')
      var oBigImg = document.getElementsByClassName('bigImg')
      var oWaterAd = document.getElementById('water-ad1')
      var space = 16
      var cols = ''
      var winWidth = document.documentElement.clientWidth
      if (winWidth < 1274) {
        cols = 4
      } else if (winWidth >= 1274 && winWidth < 1528) {
        cols = 5
      } else {
        cols = 6
      }
      oWaterFall.style.width = cols * (236 + space) - space + 'px'
      var colHeight = []
      for (var i = 0; i < cols; i++) {
        if (i === 0) {
          colHeight[i] = 236 + space
        } else {
          colHeight[i] = 0
        }
      }
      for (var j = 0; j < oWaterList.length; j++) {
        oBigImg[j].style.height = oBigImg[j].style.height + 'px'
        var minHeight = colHeight[0]
        var minIndex = 0
        for (var k = 0; k < colHeight.length; k++) {
          if (minHeight > colHeight[k]) {
            minHeight = colHeight[k]
            minIndex = k
          }
        }
        oWaterList[j].style.left = (236 + space) * minIndex + 'px'
        oWaterList[j].style.top = minHeight + 'px'
        oWaterAd.style.opacity = 1
        colHeight[minIndex] += oWaterList[j].offsetHeight + space
      }
    }
  }
  click = () => {
    document.getElementById('waterList').style.display = 'block'
  }
  render () {
    return (
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
                      <div className='cover' ref='click' onClick={this.click} id={item.Id.pinId} title={item.Id.boardId} />
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
    )
  }
}
export default WaterFall
