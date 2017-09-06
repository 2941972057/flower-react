/**
 * Created by dllo on 17/9/1.
 */
import React, {Component} from 'react'
import '../../assets/styles/new/category_title.styl'
class CategoryTitle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      line: 'theLine'
    }
  }
  componentWillReceiveProps (props) {
    for (var key in props) {
      this.state.title = props[key]
    }
  }
  click = (e) => {
    var nodes = e.target.parentNode.childNodes
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].className = ''
    }
    e.target.className = this.state.line
  }
  render () {
    return (
      <div id='wrapper-box'>
        <div id='wrapper'>
          <div id='wrapper-title-box'>
            <div className='wrapper-line' />
            <div id='wrapper-title'>{this.state.title}</div>
            <div className='wrapper-line' />
          </div>
          <div id='navs'>
            <a href='#' className={this.state.line} onClick={this.click}>采集</a>
            <a href='#' onClick={this.click}>推荐画板</a>
            <a href='#' onClick={this.click}>推荐用户</a>
          </div>
        </div>
      </div>
    )
  }
}
export default CategoryTitle
