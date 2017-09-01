/**
 * Created by dllo on 17/8/28.
 */
import React, {Component} from 'react'
import '../../assets/styles/miss/Need.styl'

class Need extends Component {
  render () {
    const arr = [
      '插画绘制', '工业设计产品', '设计网页', '设计H5页面', '设计LOGO', '设计印刷品', '设计产品包装', '设计VI系统', '设计活动页面', '摄影', '设计吉祥物', '室内设计'
    ]
    var arr1 = []
    for (let i = 0; i < arr.length; i++) {
      arr1.push(
        <a href='' className='wxj_Need_text'>
          <p className='wxj_Need_p'>{arr[i]}</p>
        </a>
          )
    }

    return (
      <div className='wxj_Need'>
        <div className='wxj_Logos_text_another1'>.</div>
        <div className='wxj_Logos_line'>.</div>
        <div className='wxj_Need_contain'>
          {arr1}
        </div>
      </div>
    )
  }
}
export default Need
