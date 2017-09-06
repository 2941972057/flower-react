/**
 * Created by dllo on 17/8/23.
 */
import React, {Component} from 'react'
// 通用样式
import '../../assets/styles/new/Header.styl'
// 头部导航组件
import HeaderNav from '../../component/common/headerNav/HeaderNav'
// 头部广告组件
import HeaderAd from '../../component/common/headerAd/HeaderAd'
// 头部大图片组件
import HeaderLoginList from '../../component/common/headerLoginList/HeaderLoginList'
import HeaderLoginShow from '../../component/common/headerLoginList/HeaderLoginShow'
// 大标题组件
import CategoryTitle from '../../component/new/Category_title'
// 内容区风格组件
import CategoryImg from '../../component/new/Category_img'
// 内容区瀑布流组件
import WaterFall from '../../component/waterFall/WaterFall'
class Favorite extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: 1,
      limit: 20,
      title: '',
      path: ''
    }
  }
  componentDidMount () {
    var search = location.search
    search = search.length > 0 ? search.substring(1) : ''
    var result = search.split('&')
    var key
    var value
    var data = []
    for (var i = 0; i < result.length; i++) {
      var result1 = result[i].split('=')
      key = result1[0]
      value = result1[1]
      data[key] = value
    }
    this.state.title = decodeURI(data.title)
    this.state.path = data.path
    document.onscroll = function () {
      var theTop = document.body.scrollTop
      var winHeight = document.documentElement.clientHeight
      var pageHeight = document.documentElement.scrollHeight
      if (theTop >= 120) {
        document.getElementById('yin').style.display = 'block'
      } else {
        document.getElementById('yin').style.display = 'none'
      }
      if (theTop + winHeight >= 0.8 * pageHeight) {
        this.setState({
          page: this.state.page + 1
        })
        fetch('/api/favorite/' + this.state.path + '/?limit=' + 20 * this.state.page, {
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
      }
    }.bind(this)
    fetch('/api/favorite/' + this.state.path + '/?limit=' + 20, {
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
  }
  render () {
    return (
      <div>
        <HeaderNav />
        <HeaderAd />
        <HeaderLoginList />
        <HeaderLoginShow />
        <CategoryTitle title={this.state.title} />
        <CategoryImg />
        <WaterFall data={this.state.data} />
      </div>
    )
  }
}
export default Favorite
