/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'
class WaterFall extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: 1,
      tf: 1
    }
  }
  componentDidMount () {
    fetch('/api/all/?page=' + this.state.page + '&limit=20', {
      method: 'GET'
    })
        .then(response => {
          return response.json()
        })
        .then(response => {
          this.setState({
            data: response.pins
          })
        })
    setTimeout(function () {
      waterFall()
    }, 3000)
    window.onresize = function () {
      waterFall()
    }
    function waterFall () {
      var oWaterFall = document.getElementById('new-waterFall')
      var oWaterList = document.getElementsByClassName('water-list')
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
        oWaterList[j].style.height = oWaterList[j].offsetHeight + 'px'
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
        oWaterList[j].style.opacity = 1
        if (j === oWaterList.length - 1) {
          oWaterFall.children[0].style.opacity = 1
        }
        colHeight[minIndex] += oWaterList[j].offsetHeight + space
      }
    }
  }
  componentWillUpdate () {
    window.onscroll = function () {
      var theTop = document.body.scrollTop
      var winHeight = document.documentElement.clientHeight
      var pageHeight = document.documentElement.scrollHeight
      if (theTop + winHeight >= 0.8 * pageHeight) {
        this.setState({
          tf: this.state.tf + 1
        })
        console.log(this.state.data)
        if (this.state.tf === 2) {
          this.setState({
            page: this.state.page + 1
          })
          fetch('/api/all/?page=' + this.state.page + '&limit=20', {
            method: 'GET'
          })
              .then(response => {
                return response.json()
              })
              .then(response => {
                this.setState({
                  data: this.state.data.concat(response.pins)
                })
              })
        }
      }
    }.bind(this)
  }
  render () {
    const arr = this.state.data
    const arrList = []
    for (const key in arr) {
      var username = ''
      if (arr[key].via_user) {
        username = arr[key].via_user.username
      } else {
        username = '花瓣宝宝'
      }
      const list = {
        bigImg: 'http://img.hb.aicdn.com/' + arr[key].file.key,
        smallImg: 'http://img.hb.aicdn.com/' + arr[key].user.avatar.key,
        title: arr[key].raw_text,
        username1: arr[key].user.username,
        username2: username
      }
      arrList.push(list)
    }
    return (
      <div id='new-waterFall'>
        <div id='water-ad1'>
          广告
        </div>
        <div id='new-waterFall'>
          {
            arrList.map((item, index) =>
              <div className='water-list' key={index}>
                <div className='wf-list'>
                  <a href=''>
                    <img src={item.bigImg} alt='' className='bigImg' />
                    <div className='cover' />
                  </a>
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
                      <a href='' className='author1'>{item.username1}</a>
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
