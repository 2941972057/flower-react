/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'
import Img1 from '../../assets/images/index/搜索 (1).png'
class NavGt extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: 1,
      value: ''
    }
  }
  click = (ev) => {
    this.setState({
      value: ev.target.value
    })
  }
  render () {
    return (
      <div className='huaNav'>
        <p>花瓣,&nbsp;&nbsp;陪你做生活的设计师</p>
        <a href={'search.html?q=' + this.state.value}>
          <img className="arrImg" src={Img1} /></a>
        <input type='text' placeholder='搜索你喜欢的'onChange={this.click} />
        <div className='soHot'>
          <span>热门搜索:</span>&nbsp;
          <a href='#'>排版</a>&nbsp;,
          <a href='#'>海报设计</a>&nbsp;,

          <a href='#'>配色</a>&nbsp;,
          <a href='#'>壁纸那些事</a>
        </div>
      </div>
    )
  }
}
export default NavGt
