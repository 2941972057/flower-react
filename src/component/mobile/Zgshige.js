/**
 * Created by dllo on 17/8/30.
 */
import React, {Component} from 'react'
import '../../assets/styles/mobile/Zgshige.styl'
class Zgshige extends Component {
  constructor (props) {
    super(props)
    this.state = {
      d: 'move'
    }
  }
  move1 = () => {
    this.setState({
      d: 'move1'
    })
  }
  move2 = () => {
    this.setState({
      d: 'move2'
    })
  }
  move3 = () => {
    this.setState({
      d: 'move3'
    })
  }
  render () {
    let myBut1 = document.getElementById('a1')
    let myBut2 = document.getElementById('a2')
    let myBut3 = document.getElementById('a3')
    let myUl = document.getElementById('w-ul')
    if (this.state.d === 'move1') {
      myUl.style.left = 0 + 'px'
      myBut1.style.backgroundPosition = '105px -175px'
      myBut2.style.backgroundPosition = '-125px 35px'
      myBut3.style.backgroundPosition = '-355px 35px'
    }
    if (this.state.d === 'move2') {
      myUl.style.left = -992 + 'px'
      myBut2.style.backgroundPosition = '-125px -175px'
      myBut1.style.backgroundPosition = '105px 35px'
      myBut3.style.backgroundPosition = '-355px 35px'
    }
    if (this.state.d === 'move3') {
      myUl.style.left = -1984 + 'px'
      myBut3.style.backgroundPosition = '-355px -175px'
      myBut1.style.backgroundPosition = '105px 35px'
      myBut2.style.backgroundPosition = '-125px 35px'
    }
    return (
      <div>
        {/* 导航 */}
        <div className='w-mobile-head'>
          <div className='w-head-dao'>
            <div className='mobile-img' />
            <div className='mobile-img1' />
          </div>
        </div>
        {/* ---- */}
        <div className='w-bg'>
          <div className='w-wrapper'>
            <ul id="w-ul" className='w-mobile-ul'>
              {/* ios页面 */}
              <li className='ios'>
                <div className='ios-img' />
                <div className='ios-img1' />
                <p className='desc'>花瓣是一个基于图片社交应用，花瓣上汇集了全球最热门，最受欢迎的图片，通过瀑布流的形式展现，你想要的这里都有</p>
                <div className='download'>
                  <div className='ios-img2' />
                  <div className='ios-img3'>
                    <span>update 2016-04-29</span>
                  </div>
                  <div className='info'>
                    <p>扫描左侧二维码下载应用</p>
                    <p>或者点击按钮从 Appstore 下载</p>
                  </div>
                </div>
              </li>
              {/* 安卓页面 */}
              <li className='android'>
                <div className='android-img' />
                <div className='android-img1' />
                <p className='desc'>花瓣是一个基于图片社交应用，花瓣上汇集了全球最热门，最受欢迎的图片，通过瀑布流的形式展现，你想要的这里都有</p>
                <div className='android-img3' />
              </li>
              {/* ipad页面 */}
              <li className='ipad'>
                <div className='ipad-img' />
                <div className='two-img'>
                  <div className='ipad-img1' />
                  <div className='ipad-img2' />
                </div>
                <div className='ipad-img3' />
              </li>
            </ul>
          </div>
        </div>
        {/* 按钮 */}
        <ul className='choice'>
          <li id="a1" className='but1' onMouseMove={this.move1}>iPhone 版</li>
          <li id="a2" className='but2' onMouseMove={this.move2}>Android 版</li>
          <li id="a3" className='but3' onMouseMove={this.move3}>iPad 版</li>
        </ul>
      </div>
    )
  }
}
export default Zgshige
