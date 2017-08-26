/**
 * Created by dllo on 17/8/25.
 */
/**
 * Created by dllo on 17/8/25.
 */
/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'

class BodyGt extends Component {
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
              this.setState({
                data: response
              })
            })
  }

  render () {
    const object = this.state.data.recommends
    const imgArr2 = []
    const titleArr = []
    const pinAll = []
    const fansAll = []
    for (const key in object) {
      if (object[key].avatar) {
        const d = 'https://' + object[key].avatar.bucket + '.b0.upaiyun.com/' + object[key].avatar.key
        imgArr2.push(d)
      } else if (object[key].cover) {
        const c = 'http://' + object[key].cover.bucket + '.b0.upaiyun.com/' + object[key].cover.key
        imgArr2.push(c)
      }

      var fans = object[key].follow_count
      fansAll.push(fans)
      var title = object[key].title
      titleArr.push(title)
      var pin = object[key].pin_count
      pinAll.push(pin)
    }

    return (

      <div id='bodyDiv'>
        <div className='flowLgt'><a><img src={imgArr2[0]} /></a></div>
        <div className='flowLgt'><a />
          <div className='bodyDiv-top'>

            <p className='pantT'>画板</p>
            <a className='titlep' >{titleArr[0]}</a>
            <br />
            <span>{fansAll[0]}粉丝</span>
            <br />

            <a className='as1'>来自</a>
            <a className='as2'>食神</a>

          </div>

          <div className='bodyDiv-down'>

            <a className='titlepdown' >{titleArr[1]}</a>

          </div>

        </div>
        <div className='flowLgt'><a><img src={imgArr2[1]} /></a></div>
        <div className='flowLgt'><a><img src={imgArr2[2]} /></a></div>
        <div className='flowLgt'><a /></div>
        <div className='flowLgt'><a /></div>
        <div className='flowLgt'><a><img src={imgArr2[3]} /></a></div>
        <div className='flowLgt'><a><img src={imgArr2[4]} /></a></div>
        <div className='flowLgt'><a /></div>
        <div className='flowLgt'><a><img src={imgArr2[5]} /></a></div>
        <div className='flowLgt'><a><img src={imgArr2[6]} /></a></div>
        <div className='flowLgt'><a /></div>
        <div className='flowLgt'><a><img src={imgArr2[7]} /></a></div>
        <div className='flowLgt'><a><img src={imgArr2[8]} /></a></div>
        <div className='flowLgt'><a /></div>
        <div className='flowLgt'><a /></div>
        <div className='flowLgt'><a><img src={imgArr2[9]} /></a></div>
        <div className='flowLgt'><a><img src={imgArr2[10]} /></a></div>
        <div className='flowLgt'><a /></div>
        <div className='flowLgt'><a><img src={imgArr2[11]} /></a></div>
        <div className='flowLgt'><a><img src={imgArr2[12]} /></a></div>
        <div className='flowLgt'><a /></div>
        <div className='flowLgt'><a><img src={imgArr2[13]} /></a></div>
        <div className='flowLgt'><a><img src={imgArr2[14]} /></a></div>
        <div className='flowLgt'><a /></div>

      </div>
    )
  }
}

export default BodyGt
