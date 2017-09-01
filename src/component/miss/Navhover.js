/**
 * Created by dllo on 17/8/30.
 */
import React, {Component} from 'react'
import '../../assets/styles/miss/Navhover.styl'

class Navhover extends Component {
  render () {
    const arr = ['LOGO/品牌', '平面设计', 'UI设计', '绘画/插画', '工业/产品设计', '影视/动画', '摄影', '服装设计', '室内设计', '造型设计', '私家定制', '其他']
    var arr1 = []
    for (let i = 0; i < arr.length; i++) {
      arr1.push(
        <a className='wxj_Navhover_p' href=''>
          <p className='wxj_Navhover_contain_p'>{arr[i]}</p>
        </a>
         )
    }
    return (
      <div className='wxj_Navhover_contain'>
        <div className='wxj_Navhover_contain_jiao' />
        {arr1}
      </div>
    )
  }
}
export default Navhover
