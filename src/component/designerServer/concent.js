/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import '../../assets/styles/miss/Miss.styl'
class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: 1
    }
  }

  componentDidMount () {
    fetch('/muse/api/v1/services/?category=paint_illustration&limit=20&page=1', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response
        })
      })
  }

  render () {
    console.log(this.state.data)
    var arr = []
    var url = []
    for (var i = 0; i < this.state.data.length; i++) {
      url[i] = 'http://muse-img.b0.upaiyun.com/' + this.state.data[i]['cover'][0]['key']
      arr.push(
        <div className='wxj_content_wrap' key={i.toString()}>
          <div className='wxj_content_img'><img src={url[i]} /></div>
          <div className='wxj_title'>{this.state.data[i].name}</div>
          <div className='wxj_price'>${this.state.data[i].price}/{this.state.data[i].unit}</div>
        </div>
      )
    }
    return (
      <div style={{overflow: 'hidden'}}>
        {arr}
      </div>
    )
  }
}
export default Content
