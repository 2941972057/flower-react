/**
 * Created by dllo on 17/8/29.
 */

import React, {Component} from 'react'
import '../../assets/styles/index/BodyGt.styl'
import Roardsone from '../../component/bodyDiv-zj/Roardsone'
// import UrlsDiv1 from '../../component/bodyDiv-zj/UrlsDiv1'
// import UrlsDiv2 from '../../component/bodyDiv-zj/UrlsDiv2'
import UrlsDiv from '../../component/bodyDiv-zj/UrlsDiv'
import Board from '../../component/bodyDiv-zj/Board'
// import Board1 from '../../component/bodyDiv-zj/Board1'
import Explores from '../../component/bodyDiv-zj/Explores'
import Users from '../../component/bodyDiv-zj/User'
import UsersLeft from '../../component/bodyDiv-zj/User-left'
import ExploresImg from '../../component/bodyDiv-zj/ExploresImg'

class Allzj extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: 1,
      t: [],
      fans: '',
      title: '',
      url: '',
      temp1: {},
      bImg10: '',
      bImg4: '',
      bImg5: '',
      board1: '',
      explor1: ''
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
          data: response,
          t: response.recommends
        })
      })
  }
  render () {
    var array = [
      {
        type: 'users'
      },
      {
        type: 'explores'
      },
      {
        type: 'boards'
      },
      {
        type: 'users'
      },
      {
        type: 'boards'
      },
      {
        type: 'explores'
      },
      {
        type: 'users'
      },
      {
        type: 'boards'
      },
      {
        type: 'explores'
      },
      {
        type: 'users'
      },
      {
        type: 'boards'
      },
      {
        type: 'explores'
      },
      {
        type: 'users'
      },
      {
        type: 'boards'
      },
      {
        type: 'explores'
      }
    ]
    var arrArr = this.state.t
    var tempArr = []
    for (var key in arrArr) {
      var bImg
      if (arrArr[key].avatar) {
        bImg = 'https://hbimg.b0.upaiyun.com/' + arrArr[key].avatar.key
      } else {
        bImg = 'https://hbimg.b0.upaiyun.com/' + arrArr[key].cover.key
      }
      var Listarr = {
        titleArr: arrArr[key].title,
        fansAll: arrArr[key].follow_count,
        pinAll: arrArr[key].pin_count,
        bImg: bImg
      }
      tempArr.push(Listarr)
    }
    var arr1 = []
    var arr2 = []
    var arr3 = []
    var arr4 = []
    var arr5 = []
    for (var key1 in tempArr[0]) {
      arr1.push(tempArr[0][key1])
    }
    for (var key2 in tempArr[9]) {
      arr2.push(tempArr[9][key2])
    }
    for (var key3 in tempArr[1]) {
      arr3.push(tempArr[1][key3])
    }
    for (var key4 in tempArr[4]) {
      arr4.push(tempArr[4][key4])
    }
    for (var key5 in tempArr[5]) {
      arr5.push(tempArr[5][key5])
    }
    this.state.bImg4 = arr5[3]
    this.state.bImg4 = arr4[3]
    console.log(this.state.bImg4, 85555555555555)
    this.state.explor1 = arr3[3]
    this.state.temp1 = arr1[0]
    this.state.board1 = arr1[3]
    this.state.bImg10 = arr2[3]
    // console.log(tempArr, 66666666)
    // console.log(this.state.t, 999999999)
    const elementArray = array.map(function (item, index) {
      if (item.type === 'users') {
        return <UrlsDiv />
      } else if (item.type === 'boards') {
        return <Roardsone />
      } else {
        return <ExploresImg />
      }
    })
    let finalElementArray = []
    for (let i = 0; i < elementArray.length - 1; i++) {
      // 2 3 8 9 14 15 20 21 2 + 6n 3 + 6n
      // i = 0  user 下一个组件 userInfo 左上 0 + 6 * 0
      // i = 1  user 上一个组件 userInfo 右下 1 + 6 * 0
      // i = 2  image 下一个组件 imageInfo 左上 大 2 + 6 * 0
      // i = 3  image 上一个组件 imageInfo 右下 大 3 + 6 * 0
      // i = 4  image 下一个组件 imageInfo 左上 4 + 6 * 0
      // i = 5  image 上一个组件 imageInfo 右下 5 + 6 * 0

      // i = 6  user 下一个组件 userInfo 左上 0 + 6 * 1
      // i = 7  user 上一个组件 userInfo 右下 1 + 6 * 1
      // i = 8  image 下一个组件 imageInfo  左上 大 2 + 6 * 1
      // i = 9  image 上一个组件 imageInfo 右下 大 3 + 6 * 1
      // i = 10  image 下一个组件 imageInfo 左上 4 + 6 * 1
      // i = 11  image 上一个组件 imageInfo 右下 5 + 6 * 1

      // i = 12  user 下一个组件 userInfo 0 + 6 * 2
      // i = 13  user 上一个组件 userInfo 1 + 6 * 2
      // i = 14  image 下一个组件 imageInfo 左上 大 2 + 6 * 2
      // i = 15  image 下一个组件 imageInfo 右下 大  3 + 6 * 2
      // i = x + 6 * n
      // 15 - 6 * n = x
      if (i % 6 === 0) {
        if (array[i].type === 'users') {
          finalElementArray.push(<UrlsDiv bImg={this.state.bImg10} />)
          finalElementArray.push(<Users title={this.state.temp1} />)
        } else if (array[i].type === 'boards') {
          finalElementArray.push(<Roardsone boards={this.state.board1} />)
          finalElementArray.push(<Board />)
        } else {
          finalElementArray.push(<ExploresImg explore={this.state.explor1} />)
          finalElementArray.push(<Explores />)
        }
      } else if (i % 6 === 1) {
        if (array[i].type === 'users') {
          finalElementArray.push(<Users />)
          finalElementArray.push(<UrlsDiv bImg={this.state.bImg4} />)
        } else if (array[i].type === 'boards') {
          finalElementArray.push(<Board />)
          finalElementArray.push(<Roardsone boards={this.state.board1} />)
        } else {
          finalElementArray.push(<Explores />)
          finalElementArray.push(<ExploresImg explore={this.state.explor1} />)
        }
      } else if (i % 6 === 2) {
        if (array[i].type === 'users') {
          finalElementArray.push(<UrlsDiv bImg={this.state.bImg4} />)
          finalElementArray.push(<UsersLeft />) // 左上大
        } else if (array[i].type === 'boards') {
          finalElementArray.push(<Roardsone boards={this.state.board1} />)
          finalElementArray.push(<Board />)
        } else {
          finalElementArray.push(<ExploresImg explore={this.state.explor1} />)
          finalElementArray.push(<Explores />)
        }
      }
      // console.log(i % 6)
      // console.log('左上')
      // console.log('右下')
      if (i % 2 === 0) {
        if (array[i].type === 'users') {
          finalElementArray.push(<UrlsDiv bImg={this.state.bImg4} />)
          finalElementArray.push(<Users />) // 左上
        } else if (array[i].type === 'boards') {
          finalElementArray.push(<Roardsone boards={this.state.board1} />)
          finalElementArray.push(<Board />)
        } else {
          finalElementArray.push(<ExploresImg explore={this.state.bImg5} />)
          finalElementArray.push(<Explores />)
        }
      } else {
        if (array[i].type === 'users') {
          finalElementArray.push(<Users />) // 右下
          finalElementArray.push(<UrlsDiv bImg={this.state.bImg5} />)
        } else if (array[i].type === 'boards') {
          finalElementArray.push(<Board />)
          finalElementArray.push(<Roardsone boards={this.state.board1} />)
        } else {
          finalElementArray.push(<Explores />)
          finalElementArray.push(<ExploresImg bImg={this.state.bImg5} />)
        }
      }
    }
    return (
      <div className='bodyDiv'>
        { finalElementArray }
      </div>
    )
  }
}
export default Allzj
