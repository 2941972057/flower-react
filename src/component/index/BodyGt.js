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
import Roardsone from '../../component/bodyDiv-zj/Roardsone'
import '../../assets/styles/index/BodyGt.styl'
import SanImg from '../../assets/images/index/三角形.png'
import SanzImg from '../../assets/images/index/三角形左.png'
class BodyGt extends Component {
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
    const titleArr = []
    const pinAll = []
    const fansAll = []
    for (const key in object) {
      if (object[key].type === 'users') {
        const d = 'https://' + object[key].avatar.bucket + '.b0.upaiyun.com/' + object[key].avatar.key
        var fansU = object[key].follow_count
        fansAll.push(fansU)
        var titleU = object[key].title
        titleArr.push(titleU)
        var pinU = object[key].pin_count
        pinAll.push(pinU)
        imgArr2.push(d)
      } else if (object[key].type === 'boards') {
        const c = 'http://' + object[key].cover.bucket + '.b0.upaiyun.com/' + object[key].cover.key
        var fansB = object[key].follow_count
        fansAll.push(fansB)
        var titleB = object[key].title
        titleArr.push(titleB)
        var pinB = object[key].pin_count
        pinAll.push(pinB)
        imgArr2.push(c)
      } else if (object[key].type === 'explores') {
        const e = 'http://' + object[key].cover.bucket + '.b0.upaiyun.com/' + object[key].cover.key
        var titleE = object[key].title
        titleArr.push(titleE)
        imgArr2.push(e)
      }
      // var gods = object[0].user.username
      // var gods = object[0].user.username
      // var sister = object[4].user.username

      // var fans = object[key].follow_count
      // fansAll.push(fans)
      // var title = object[key].title
      // titleArr.push(title)
      // var pin = object[key].pin_count
      // pinAll.push(pin)

      // var personDiv = {
      //   backgroundImage: 'url(' + imgArr2[1] + ')'
      // }
    }

    return (
      <div id='bodyDiv'>

        <div className='flowLgt'>
          <a><img className='LaiImg' src={imgArr2[0]} /></a>
        </div>
        <div className='flowLgt'><a />
          <div className='bodyDiv-top'>
            <img className='sanzImg' src={SanzImg} />
            <p className='pantT'>画板</p>
            <a className='titlep'>{titleArr[0]}</a>
            <br />
            <span>{fansAll[0]}粉丝</span>
            <span>{pinAll[0]}采集</span>
            <br />
            <a className='as1'>来自</a>
            <a className='as2'>gods</a>
          </div>
          <div className='bodyDiv-down'>
            <img className='sanImg' src={SanImg} />
            <p className='pantP'>人物</p>
            <a className='titlepdown'>{titleArr[1]}</a>
            <br />
            <span>{fansAll[1]}粉丝</span>
            <span>{pinAll[1]}采集</span>
          </div>
        </div>
        <div className='flowLgt'><a><img className='LaiImg' src={imgArr2[1]} /></a></div>
        <div className='flowLgt'><a><img className='LaiImg' src={imgArr2[2]} /></a>
        </div>
        <div className='flowLgt'><a />
          <div className='rlDiv'>
            <img className='danImg' src={SanzImg} />
            <p className='pantT'>兴趣</p>
            <a className='titlep'>{titleArr[2]}</a>
          </div>
        </div>
        <div className='flowLgt'><a />

          <div className='zlDiv'>
            <img className='danrImg' src={SanImg} />
            <p className='pantP2'>兴趣</p>
            <a className='titlepdown2'>{titleArr[3]}</a>
          </div>

        </div>
        <div className='flowLgt'><a><img className='LaiImg' src={imgArr2[3]} /></a>
        </div>
        <div className='flowLgt'><a><img className='LaiImg' src={imgArr2[4]} /></a>
        </div>
        <div className='flowLgt'><a />
          <div className='bodyDiv-top'>
            <img className='sanzImg' src={SanzImg} />
            <p className='pantT'>画板</p>
            <a className='titlep'>{titleArr[4]}</a>
            <br />
            <span>{fansAll[4]}粉丝</span>
            <span>{pinAll[4]}采集</span>
            <br />
            <a className='as1'>来自</a>
            <a className='as2'>s</a>
          </div>
          <div className='bodyDiv-down'>
            <img className='sanImg' src={SanImg} />
            <p className='pantP'>人物</p>
            <a className='titlepdown'>{titleArr[5]}</a>
            <br />
            <span>{fansAll[5]}粉丝</span>
            <span>{pinAll[5]}采集</span>
          </div>
        </div>
        <div className='flowLgt'><a><img className='LaiImg' src={imgArr2[5]} /></a></div>
        <div className='flowLgt'><a><img className='LaiImg' src={imgArr2[6]} /></a></div>
        <div className='flowLgt'><a>
          <div className='bodyDiv-top'>
            <img className='sanzImg' src={SanzImg} />
            <p className='pantT'>画板</p>
            <a className='titlep'>{titleArr[6]}</a>
            <br />
            <span>{fansAll[6]}粉丝</span>
            <span>{pinAll[6]}采集</span>
            <br />
            <a className='as1'>来自</a>
            <a className='as2'>GG-</a>
          </div>
          <div className='bodyDiv-down'>
            <img className='sanImg' src={SanImg} />
            <p className='pantP'>人物</p>
            <a className='titlepdown'>{titleArr[7]}</a>
            <br />
            <span>{fansAll[7]}粉丝</span>
            <span>{pinAll[7]}采集</span>
          </div>
        </a></div>
        <div className='flowLgt'><a><img className='LaiImg' src={imgArr2[7]} /></a></div>
        <div className='flowLgt'><a><img className='LaiImg' src={imgArr2[8]} /></a></div>
        <div className='flowLgt'><a />
          <div className='rlDiv'>
            <img className='danImg' src={SanzImg} />
            <p className='pantT'>兴趣</p>
            <a className='titlep'>{titleArr[8]}</a>
          </div>
        </div>
        <div className='flowLgt'><a />
          <div className='zlDiv'>
            <img className='danrImg' src={SanImg} />
            <p className='pantP2'>兴趣</p>
            <a className='titlepdown2'>{titleArr[9]}</a>
          </div>
        </div>
        <div className='flowLgt'><a><img className='LaiImg' src={imgArr2[9]} /></a></div>
        <div className='flowLgt'><a><img className='LaiImg' src={imgArr2[10]} /></a></div>
        <div className='flowLgt'><a />

          <div className='bodyDiv-top'>
            <img className='sanzImg' src={SanzImg} />
            <p className='pantT'>画板</p>
            <a className='titlep'>{titleArr[10]}</a>
            <br />
            <span>{fansAll[10]}粉丝</span>
            <span>{pinAll[10]}采集</span>
            <br />
            <a className='as1'>来自</a>
            <a className='as2'>GG-</a>
          </div>
          <div className='bodyDiv-down'>
            <img className='sanImg' src={SanImg} />
            <p className='pantP'>人物</p>
            <a className='titlepdown'>{titleArr[11]}</a>
            <br />
            <span>{fansAll[11]}粉丝</span>
            <span>{pinAll[11]}采集</span>
          </div>
        </div>
        <div className='flowLgt'><a><img className='LaiImg' src={imgArr2[11]} /></a></div>
        <div className='flowLgt'><a><img className='LaiImg' src={imgArr2[12]} /></a></div>
        <div className='flowLgt'><a />
          <div className='bodyDiv-top'>
            <img className='sanzImg' src={SanzImg} />
            <p className='pantT'>画板</p>
            <a className='titlep'>{titleArr[12]}</a>
            <br />
            <span>{fansAll[12]}粉丝</span>
            <span>{pinAll[12]}采集</span>
            <br />
            <a className='as1'>来自</a>
            <a className='as2'>桐哥-</a>
          </div>
          <div className='bodyDiv-down'>
            <img className='sanImg' src={SanImg} />
            <p className='pantP'>人物</p>
            <a className='titlepdown'>{titleArr[13]}</a>
            <br />
            <span>{fansAll[13]}粉丝</span>
            <span>{pinAll[13]}采集</span>
          </div>
        </div>
        <div className='flowLgt'><a><img className='LaiImg' src={imgArr2[13]} /></a></div>
        <div className='flowLgt'><a><img className='LaiImg' src={imgArr2[14]} /></a></div>
        <div className='flowLgt'><a />
          <div className='bodyDiv-toper'>
            <img className='sanzImg' src={SanzImg} />
            <p className='pantT'>画板</p>
            <a className='titlep'>{titleArr[14]}</a>
            <br />
            <span>{fansAll[14]}粉丝</span>
            <span>{pinAll[14]}采集</span>
            <br />
            <a className='as1'>来自</a>
            <a className='as2'>桐哥-</a>
          </div>
        </div>
        <Roardsone />

      </div>

    )
  }
}
export default BodyGt
