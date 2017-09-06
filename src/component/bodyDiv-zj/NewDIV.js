import React, {Component} from 'react'
import '../../assets/styles/index/BodyGt.styl'
class NewDIV extends Component {
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
          data: response.recommends
        })
      })
  }
  render () {
    var Arr1 = this.state.data
    var tempArr = []
    console.log(Arr1, 56565656565656)
    for (var key in Arr1) {
      var bImg
      var aImg
      if (Arr1[key].avatar) {
        bImg = 'https://hbimg.b0.upaiyun.com/' + Arr1[key].avatar.key
      } else {
        aImg = 'https://hbimg.b0.upaiyun.com/' + Arr1[key].cover.key
      }
      var Listarr = {
        titleArr: Arr1[key].title,
        fansAll: Arr1[key].follow_count,
        pinAll: Arr1[key].pin_count,
        cover: Arr1[key].cover,
        bImg: bImg,
        aImg: aImg
      }
      tempArr.push(Listarr)
    }
    return (
      <div id='newDiv'>
        {
          tempArr.map((item, index) =>
          item.cover === {}
            ? <div className='flowLgt' style={{background: 'url(' + tempArr.bImg + ')'}}>
              <a href='#'><div className='MengBan'>
                <img className='smallV' src={tempArr.bImg} />
              </div></a>
            </div>
            : <div className='flowLgt'>
              <a><img className='LaiImg' src={tempArr.aImg} /></a>
            </div>
          )

        }
      </div>
    )
  }
}
export default NewDIV
