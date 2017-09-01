/**
 * Created by dllo on 17/8/23.
 */
import React, {Component} from 'react'
// 头部样式
import '../../assets/styles/new/Header.styl'
// 头部导航组件
import HeaderNav from '../../component/common/headerNav/HeaderNav'
// 头部广告组件
import HeaderAd from '../../component/common/headerAd/HeaderAd'
// 头部大图片组件
import HeaderLoginList from '../../component/common/headerLoginList/HeaderLoginList'
import HeaderLoginShow from '../../component/common/headerLoginList/HeaderLoginShow'
// 内容区分类组件
import CategoryGuide from '../../component/new/Category_guide'
// 内容区风格组件
import CategoryImg from '../../component/new/Category_img'
// 内容区瀑布流组件
import WaterFall from '../../component/waterFall/WaterFall'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: 1
    }
  }
  componentDidMount () {
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
    }.bind(this)
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
  }

  render () {
    return (
      <div>
        <HeaderNav />
        <HeaderAd />
        <HeaderLoginList />
        <HeaderLoginShow />
        <CategoryGuide />
        <CategoryImg />
        <WaterFall data={this.state.data} />
      </div>
    )
  }
}
export default App
