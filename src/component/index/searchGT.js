import '../../assets/styles/new/Header.styl'
import SearchWater from '../../component/index/SearchWater'
import SearchGT3 from '../../component/index/SearchGT3'
import SearchGT1 from '../../component/index/searchGT1'
import SearchGT2 from '../../component/index/searchGT2'
import '../../assets/styles/index/BodyGt.styl'
import SearchImg from '../../assets/images/index/搜索.png'
// 头部导航组件
import HeaderNav from '../../component/common/headerNav/HeaderNav'
// 头部广告组件
import HeaderAd from '../../component/common/headerAd/HeaderAd'
// 头部大图片组件
import React, {Component} from 'react'

class SearchGT extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      data1: [],
      data2: [],
      datac: [],
      page: 1,
      url: window.location.href.split('=')[1],
      value: '',
      pb: '666',
      dete: [],
      NB: ''
    }
  }

  componentDidMount () {
    document.onscroll = function () {
      var theTop = document.body.scrollTop
      var winHeight = document.documentElement.clientHeight
      var pageHeight = document.documentElement.scrollHeight
      if (theTop + winHeight >= 0.8 * pageHeight) {
        this.setState({
          page: this.state.page + 1
        })
        fetch('/api/search/?q=' + this.state.url + '&page=' + this.state.page, {
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
    }.bind(this)
    fetch('/api/search/?q=' + this.state.url + '&page=' + this.state.page, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.pins,
          NB: ''
        })
      })
  }
  change = (ev) => {
    this.setState({
      value: ev.target.value
    })
  }
  click = () => {
    fetch('/api/search/?q=' + this.state.url + '&sort=weight&page=' + this.state.page, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data1: response.pins,
          pb: '888',
          NB: 'data1'
        })
      })
  }
  clickc = () => {
    fetch('/api/search/?q=' + this.state.url + '&sort=weight' + '&page=' + this.state.page, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.pins,
          pb: '88',
          NB: ''
        })
      })
  }
  click1 = () => {
    fetch('/api/search/?q=' + this.state.url + '&sort=relative&page=' + this.state.page, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          dete: response.pins,
          pb: '777',
          NB: 'bbb'
        })
        console.log(this.state.dete, 5656)
      })
  }
  click2 = () => {
    fetch('/api/search/?q=' + this.state.url + '&sort=created_at&page=' + this.state.page, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data2: response.pins,
          pb: '999',
          NB: 'data2'
        })
        console.log(this.state.data2, 456456456)
      })
  }
  // componentDidUpdate () {
  //   if (this.state.NB !== '') {
  //     fetch('/api/search/?q=' + this.state.url + '&page=' + this.state.page, {
  //       method: 'GET'
  //     })
  //       .then(response => {
  //         return response.json()
  //       })
  //       .then(response => {
  //         this.setState({
  //           data: response.pins,
  //           NB: this.state.NB
  //         })
  //       })
  //   }
  // }

  render () {
    var gt = document.getElementsByClassName('href-a')
    for (var i = 0; i < gt.length; i++) {
      gt[i].style.color = ''
      if (this.state.pb === '888') {
        gt[2].style.color = 'red'
      } else if (this.state.pb === '666') {
        gt[2].style.color = 'black'
      } else if (this.state.pb === '777') {
        gt[3].style.color = 'red'
      } else if (this.state.pb === '999') {
        gt[4].style.color = 'red'
      } else if (this.state.pb === '88') {
        gt[1].style.color = 'red'
      }
    }
    var nb = ''
    if (this.state.NB === 'bbb') {
      return (
        <div>
          <div id='searchPage'>
            <HeaderNav />
            <HeaderAd />
            <div id='searchBig' >
              <input type='text' placeholder='搜索你喜欢的内容' className='searchtext' onChange={this.change} />
              <a href={'search.html?q=' + this.state.value}><img className='pgo' src={SearchImg} /></a>
              <div className='searchBox'>
                <a href='#'><span className='span-a'>34757采集</span></a>
                <a href='#'><span className='span-a'>7331画板</span></a>
                <a href='#'><span className='span-a'>5404用户</span></a>
                <a className='href-a'>排序:</a>
                <a className='href-a' onClick={this.clickc}>综合</a>
                <a className='href-a' onClick={this.click}>热门</a>
                <a className='href-a' onClick={this.click1}>匹配度</a>
                <a className='href-a' onClick={this.click2}>时间</a>
              </div>
            </div>
          </div>
          <SearchGT3 dete={this.state.dete} />
        </div>
      )
    } if (this.state.NB === '') {
      return (
        <div>
          <div id='searchPage'>
            <HeaderNav />
            <HeaderAd />
            <div id='searchBig' >
              <input type='text' placeholder='搜索你喜欢的内容' className='searchtext' onChange={this.change} />
              <a href={'search.html?q=' + this.state.value}><img className='pgo' src={SearchImg} /></a>
              <div className='searchBox'>
                <a href='#'><span className='span-a'>34757采集</span></a>
                <a href='#'><span className='span-a'>7331画板</span></a>
                <a href='#'><span className='span-a'>5404用户</span></a>
                <a className='href-a'>排序:</a>
                <a className='href-a' onClick={this.clickc}>综合</a>
                <a className='href-a' onClick={this.click}>热门</a>
                <a className='href-a' onClick={this.click1}>匹配度</a>
                <a className='href-a' onClick={this.click2}>时间</a>
              </div>
            </div>
          </div>
          <SearchWater data={this.state.data} />
        </div>
      )
    } if (this.state.NB === 'data1') {
      return (
        <div>
          <div id='searchPage'>
            <HeaderNav />
            <HeaderAd />
            <div id='searchBig' >
              <input type='text' placeholder='搜索你喜欢的内容' className='searchtext' onChange={this.change} />
              <a href={'search.html?q=' + this.state.value}><img className='pgo' src={SearchImg} /></a>
              <div className='searchBox'>
                <a href='#'><span className='span-a'>34757采集</span></a>
                <a href='#'><span className='span-a'>7331画板</span></a>
                <a href='#'><span className='span-a'>5404用户</span></a>
                <a className='href-a'>排序:</a>
                <a className='href-a' onClick={this.clickc}>综合</a>
                <a className='href-a' onClick={this.click}>热门</a>
                <a className='href-a' onClick={this.click1}>匹配度</a>
                <a className='href-a' onClick={this.click2}>时间</a>
              </div>
            </div>
          </div>
          <SearchGT1 data1={this.state.data1} />
        </div>
      )
    } if (this.state.NB === 'data2') {
      return (
        <div>
          <div id='searchPage'>
            <HeaderNav />
            <HeaderAd />
            <div id='searchBig' >
              <input type='text' placeholder='搜索你喜欢的内容' className='searchtext' onChange={this.change} />
              <a href={'search.html?q=' + this.state.value}><img className='pgo' src={SearchImg} /></a>
              <div className='searchBox'>
                <a href='#'><span className='span-a'>34757采集</span></a>
                <a href='#'><span className='span-a'>7331画板</span></a>
                <a href='#'><span className='span-a'>5404用户</span></a>
                <a className='href-a'>排序:</a>
                <a className='href-a' onClick={this.clickc}>综合</a>
                <a className='href-a' onClick={this.click}>热门</a>
                <a className='href-a' onClick={this.click1}>匹配度</a>
                <a className='href-a' onClick={this.click2}>时间</a>
              </div>
            </div>
          </div>
          <SearchGT2 data2={this.state.data2} />
        </div>
      )
    }
    return (
      <div>
        {nb}
      </div>
    )
  }
}
export default SearchGT
