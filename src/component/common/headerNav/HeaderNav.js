/**
 * Created by dllo on 17/8/30.
 */
import React, {Component} from 'react'
import HeaderNavFixed from './HeaderNavFixed'
import '../../../assets/styles/common/headerNav/headerNav.styl'
class HeaderNav extends Component {
  render () {
    return (
      <div id='nav-fixed'>
        <HeaderNavFixed />
        <div id='nav-fixed-box' />
      </div>
    )
  }
}
export default HeaderNav
