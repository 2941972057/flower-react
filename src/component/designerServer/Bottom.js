import React, {Component} from 'react'
import '../../assets/styles/miss/Miss.styl'

class Bottom extends Component {
  render () {
    const arr = ['花瓣美思', '平台战略合作伙伴', '联系与合作', '移动客户端']
    const arr2 = ['关于美思', '中华世纪坛创意新媒体联盟', '联系我们', 'iOS', '雇主问题', '视觉中国', '联系客服', 'Android', '设计师问题', '腾讯风铃', '微博@花瓣网', '使用帮助', 'ixdc', '微信', '红星奖']
    var arr1 = []
    var arr3 = []
    for (let i = 0; i < arr.length; i++) {
      arr1.push(
        <p className='wxj_bottom_p1'>
          {arr[i]}
        </p>
            )
    }

    for (let j = 0; j < arr2.length; j++) {
      arr3.push(
        <a href='' className='wxj_bottom_p2'>
          {arr2[j]}
        </a>
        )
    }
    return (
      <div className='wxj_bottom'>
        <div className='wxj_bottom_contain'>
          <p className='wxj_bottom_title'>花瓣美思，花瓣网旗下网站</p>
          {arr1}
          {arr3}
        </div>
        <div className='wxj_bottom_p'>
          <p>Copyright© Huaban.com 2016 | 浙B2-20110282 浙ICP备05049240</p>
        </div>
      </div>
    )
  }
}
export default Bottom
