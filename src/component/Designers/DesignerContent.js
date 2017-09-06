/**
 * Created by dllo on 17/9/5.
 */
import React, {Component} from 'react'
import '../../assets/styles/miss/DesignerContent.styl'
import Xing from '../../assets/images/miss/白星星.png'
import you from '../../assets/images/miss/8D905C1A-5E94-4B8D-B54F-8A6B6584DF70.png'
import zuo from '../../assets/images/miss/86A495BF-7F9A-461A-9147-2FF3B74A1F6C.png'
import ui from '../../assets/images/miss/DBE69879-98B4-4564-A6AC-A897E8FA2A1B.png'
class DesignerContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    fetch('/muse/api/v1/users/', {
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
    console.log(this.state.data)
    var ImgArr = []
    for (let i = 0; i < this.state.data.length; i++) {
      console.log(this.state.data[i])
      ImgArr.push(
        <div className='wxj_Content_img'>
          <div className='wxj_Content_left'>
            <div className='wxj_Content_title'>
              {this.state.data[i]['username']}
            </div>
            <div className='wxj_Content_access'>
              <span>{this.state.data[i]['status']}</span>
              <span>个设计服务  评价</span>
              <img src={Xing} />
            </div>
          </div>
          <div className='wxj_Content_right'>
            <img src={'http://hbimg.b0.upaiyun.com/' + this.state.data[i]['avatar']['key'] + '_/both/140x140'} />
          </div>
          <div className='wxj_Content_bottom'>{this.state.data[i]['desc']}</div>
        </div>
      )
    }
    return (
      <div className='wxj_content_all'>
        <div className='wxj_nav_all'>
          <ul className='wxj_nav'>
            <a style={{width: '46px', height: '19px'}}><li>分类:</li></a>
            <a onClick={this.clickAll} style={{width: '28px', height: '19px'}}><li>全部</li></a>
            <a onClick={this.clickLgo} style={{width: '56px', height: '19px'}}><li>UI设计师</li></a>
            <a onClick={this.clickLPlane} style={{width: '70px', height: '19px'}}><li>平面设计师</li></a>
            <a onClick={this.clickLInset} style={{width: '42px', height: '19px'}}><li>摄影师</li></a>
            <a onClick={this.clickLProduct} style={{width: '42px', height: '19px'}}><li>插画师</li></a>
            <a onClick={this.clickLFilm} style={{width: '42px', height: '19px'}}><li>漫画师</li></a>
            <a onClick={this.clickLPhotograph} style={{width: '42px', height: '19px'}}><li>动画师</li></a>
            <a onClick={this.clickCloth} style={{width: '70px', height: '19px'}}><li>家居设计师</li></a>
            <a onClick={this.clickIndoor} style={{width: '70px', height: '19px'}}><li>室内设计师</li></a>
            <a onClick={this.clickModule} style={{width: '70px', height: '19px'}}><li>服装设计师</li></a>
            <a onClick={this.clickVIP} style={{width: '70px', height: '19px'}}><li>工业设计师</li></a>
            <a onClick={this.clickOther} style={{width: '42px', height: '19px'}}><li>造型师</li></a>
            <a onClick={this.clickOther} style={{width: '70px', height: '19px'}}><li>游戏美术师</li></a>
            <a onClick={this.clickOther} style={{width: '56px', height: '19px'}}><li>手工艺人</li></a>
            <a onClick={this.clickOther} style={{width: '28px', height: '19px'}}><li>其它</li></a>
          </ul>
        </div>
        <div className='wxj_Content_content'>
          {ImgArr}
          <div className='wxj_content_bottom'>
            <ul className='wxj_content_page'>
              <a href=''><li style={{width: '64.58px', height: '40px'}}><img style={{marginTop: '10px'}} src={zuo} /></li></a>
              <a ><li onClick={this.clickAll} style={{width: '48.91px', height: '40px'}}>1</li></a>
              <a><li onClick={this.clickLgo} style={{width: '48.91px', height: '40px'}}>2</li></a>
              <a><li onClick={this.clickLPlane} style={{width: '48.91px', height: '40px'}}>3</li></a>
              <a><li onClick={this.clickLInset} style={{width: '48.91px', height: '40px'}}>4</li></a>
              <a><li onClick={this.clickLProduct} style={{width: '48.91px', height: '40px'}}>5</li></a>
              <a><li onClick={this.clickLFilm} style={{width: '48.91px', height: '40px'}}>6</li></a>
              <a><li onClick={this.clickLPhotograph} style={{width: '48.91px', height: '40px'}}>7</li></a>
              <a><li onClick={this.clickCloth} style={{width: '48.91px', height: '40px'}}>8</li></a>
              <a><li onClick={this.clickIndoor} style={{width: '48.91px', height: '40px'}}>9</li></a>
              <a><li onClick={this.clickModule} style={{width: '48.91px', height: '40px'}}>...</li></a>
              <a><li onClick={this.clickVIP} style={{width: '57.8px', height: '40px'}}>99</li></a>
              <a><li onClick={this.clickOther} style={{width: '66.7px', height: '40px'}}>100</li></a>
              <a><li onClick={this.clickOther} style={{width: '64.58px', height: '40px'}}><img src={ui} style={{marginTop: '10px'}} /></li></a>
              <a href=''><li onClick={this.clickOther} style={{width: '64.58px', height: '40px'}}><img style={{marginTop: '10px'}} src={you} /></li></a>
            </ul>
          </div>
>>>>>>> 69c59b6f396b35bd12427a4aa7608ccbc89e1933
        </div>
      </div>
    )
  }
}
export default DesignerContent
