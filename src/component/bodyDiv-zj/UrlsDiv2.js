import React, {Component} from 'react'
import '../../assets/styles/index/BodyGt.styl'
class UrlsDiv2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: 2
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
      if (object[key].type === 'users') {
        const d = 'https://' + object[key].avatar.bucket + '.b0.upaiyun.com/' + object[key].avatar.key
        imgArr2.push(d)
      }
      var personDiv = {
        backgroundImage: 'url(' + imgArr2[1] + ')'
      }
    }

    return (
      <div className='flowLgt' style={personDiv}>
        <a href='#'><div className='MengBan'>
          <img className='smallV' src={imgArr2[1]} />
        </div></a>
      </div>
    )
  }
}
export default UrlsDiv2
