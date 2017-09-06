import React, {Component} from 'react'
import '../../assets/styles/miss/Navhover.styl'

class Navhover extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  clickLgo = () => {
    fetch('/muse/api/v1/services/?category=logo_brand', {
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
  clickLPlane = () => {
    fetch('/muse/api/v1/services/?category=graphic_design', {
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
  clickLInset = () => {
    fetch('/muse/api/v1/services/?category=web_app_ui', {
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
  clickLProduct = () => {
    fetch('/muse/api/v1/services/?category=industry_product', {
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
  clickLFilm = () => {
    fetch('/muse/api/v1/services/?category=video_animation', {
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
  clickLPhotograph = () => {
    fetch('/muse/api/v1/services/?category=graphic_design', {
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
  clickCloth = () => {
    fetch('/muse/api/v1/services/?category=costume_design', {
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
  clickIndoor = () => {
    fetch('/muse/api/v1/services/?category=interior_home_design', {
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
  clickModule = () => {
    fetch('/muse/api/v1/services/?category=graphic_design', {
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
  clickVIP = () => {
    fetch('/muse/api/v1/services/?category=custom_design', {
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
  clickOther = () => {
    fetch('/muse/api/v1/services/?category=others', {
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

  render() {
    return (
      <div className='wxj_Navhover_contain'>
        <div className='wxj_Navhover_contain_jiao' />
        <div className='wxj_nav_all_HOVER'>
          <ul className='wxj_nav_HOVER'>
            <a href='designerServer.html' onClick={this.clickLgo} className='wxj_Navhover_contain_p'>
              <li>LOGO/品牌</li>
            </a>
            <a href='designerServer.html' onClick={this.clickPlane} className='wxj_Navhover_contain_p'>
              <li>平面设计</li>
            </a>
            <a href='designerServer.html' onClick={this.clickLPlane} className='wxj_Navhover_contain_p'>
              <li>UI设计</li>
            </a>
            <a href='designerServer.html' onClick={this.clickLInset} className='wxj_Navhover_contain_p'>
              <li>绘画/插画</li>
            </a>
            <a href='designerServer.html' onClick={this.clickLProduct} className='wxj_Navhover_contain_p'>
              <li>工业/产品设计</li>
            </a>
            <a href='designerServer.html' onClick={this.clickLFilm} className='wxj_Navhover_contain_p'>
              <li>影视/动画</li>
            </a>
            <a href='designerServer.html' onClick={this.clickLPhotograph} className='wxj_Navhover_contain_p'>
              <li>服装设计</li>
            </a>
            <a href='designerServer.html' onClick={this.clickIndoor} className='wxj_Navhover_contain_p'>
              <li>室内设计</li>
            </a>
            <a href='designerServer.html' onClick={this.clickModule} className='wxj_Navhover_contain_p'>
              <li>造型设计</li>
            </a>
            <a href='designerServer.html' onClick={this.clickVIP} className='wxj_Navhover_contain_p'>
              <li>私家定制</li>
            </a>
            <a href='designerServer.html' onClick={this.clickOther} className='wxj_Navhover_contain_p'>
              <li>其他</li>
            </a>
          </ul>
        </div>
      </div>
    )
  }
}
export default Navhover
