/**
 * Created by dllo on 17/8/29.
 */

import React, {Component} from 'react'
import '../../assets/styles/index/BodyGt.styl'
import Roardsone from '../../component/bodyDiv-zj/Roardsone'
import UrlsDiv from '../../component/bodyDiv-zj/UrlsDiv'
import Board from '../../component/bodyDiv-zj/Board'
import Explores from '../../component/bodyDiv-zj/Explores'
import Users from '../../component/bodyDiv-zj/User'
import ExploresImg from '../../component/bodyDiv-zj/ExploresImg'

class Allzj extends Component {
  aa = (ev) => {
    console.log(ev.target.getAttribute('name'))
  }

  render () {
    var array = [
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
    const elementArray = array.map(function (item, index) {
      if (item.type === 'users') {
        return <Users />
      } else if (item.type === 'boards') {
        return <Board />
      } else {
        return <Explores />
      }
    })
    return (
      <div className='bodyDiv'>
        {elementArray}
        <Roardsone />
        <UrlsDiv />
        <ExploresImg />
      </div>
    )
  }
}
export default Allzj
