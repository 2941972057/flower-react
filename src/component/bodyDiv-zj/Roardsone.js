
import React, {Component} from 'react'
import '../../assets/styles/index/BodyGt.styl'
class Roardsone extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: 1
    }
  }

  componentDidMount () {
    fetch('/api/?page=' + this.state.page, {
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
    const object = this.state.data.recommends
    const imgArr2 = []
    for (const key in object) {
      if (object[key].type === 'boards') {
        const c = 'http://' + object[key].cover.bucket + '.b0.upaiyun.com/' + object[key].cover.key
        imgArr2.push(c)
      }
    }

    return (
      <div className='flowLgt'>
        <a><img className='LaiImg' src={imgArr2[1]} /></a>
      </div>
    )
  }
}
export default Roardsone
