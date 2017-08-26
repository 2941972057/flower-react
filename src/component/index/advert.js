/**
 * Created by dllo on 17/8/25.
 */
/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'

class AdvertGt extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    fetch('/api/?page=1', {
      method: 'GET'
    })
            .then(response => {
              return response.json()
            })
            .then(response => {
              console.log(response)
              this.setState({
                data: response
              })
            })
  }

  render () {
    const object = this.state.data.explores
    const imgArr1 = []
    for (const key in object) {
      const b = 'http://' + object[key].cover.bucket + '.b0.upaiyun.com/' + object[key].cover.key
      imgArr1.push(b)
    }

    return (
      <div className='mindP'>
        <div className='recommend-line'>
          <a>大家正在关注</a>
          <div className='line' />
        </div>
        <div className='advert'>
          <div><a><img src={imgArr1[1]} /></a></div>
          <div><a><img src={imgArr1[2]} /></a></div>
          <div><a><img src={imgArr1[3]} /></a></div>
          <div><a><img src={imgArr1[4]} /></a></div>
          <div>
            <a href='#' className='ab1'>蛋糕</a>
            <a href='#'><img className='img1' src={imgArr1[5]} /></a>
          </div>
          <div>
            <a href='#' className='ab2'>PINK</a>
            <a href='#'><img className='img1' src={imgArr1[6]} /></a>
          </div>
        </div>
        <div className='recommend-line2'>
          <a>为您推荐</a>
          <div className='line2' />
        </div>
      </div>

    )
  }
}
export default AdvertGt
