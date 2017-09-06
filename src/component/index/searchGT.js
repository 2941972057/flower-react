import '../../assets/styles/new/Header.styl'
import SearchWater from '../../component/index/SearchWater'
import SearchWater3 from '../../component/index/SearchGT3'
import '../../assets/styles/index/BodyGt.styl'
import React, {Component} from 'react'

class SearchGT extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: 1,
      url: window.location.href.split('=')[1],
      value: '',
      pb: '666',
      dete: [],
      NB: ''
    }
  }

  componentDidMount () {
    document.onscroll = function () {
      var theTop = document.body.scrollTop
      var winHeight = document.documentElement.clientHeight
      var pageHeight = document.documentElement.scrollHeight
      if (theTop + winHeight >= 0.8 * pageHeight) {
        this.setState({
          page: this.state.page + 1
        })
        fetch('/api/search/?q=' + this.state.url + '&page=' + this.state.page, {
          method: 'GET'
        })
          .then(response => {
            return response.json()
          })
          .then(response => {
            this.setState({
              data: this.state.data.concat(response.pins)
            })
          })
      }
    }.bind(this)
    fetch('/api/search/?q=' + this.state.url + '&page=' + this.state.page, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.pins,
          NB: ''
        })
      })
  }
  change = (ev) => {
    this.setState({
      value: ev.target.value
    })
  }
  click = () => {
    fetch('/api/search/?q=' + this.state.url + '&sort=weight&page=' + this.state.page, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.pins,
          pb: '888'
        })
      })
  }
  clickc = () => {
    fetch('/api/search/?q=' + this.state.url + '&sort=weight' + '&page=' + this.state.page, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.pins,
          pb: '88'
        })
      })
  }
  click1 = () => {
    fetch('/api/search/?q=' + this.state.url + '&sort=relative&page=' + this.state.page, {
      method: 'GET',
      NB: 3
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          dete: response.pins,
          pb: '777'
        })
        console.log(response.pins)
      })
  }
  click2 = () => {
    fetch('/api/search/?q=' + this.state.url + '$sort=created' + '&page=' + this.state.page, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.pins,
          pb: '999'
        })
      })
  }

  render () {
    var nb = ''
    var gt = document.getElementsByClassName('href-a')
    if (this.state.NB === 3) {
      return <SearchWater3 dete={this.state.dete} />
    } else if (this.state.NB === '') {
      return <SearchWater data={this.state.data} />
    }
    for (var i = 0; i < gt.length; i++) {
      gt[i].style.color = ''
      if (this.state.pb === '888') {
        gt[2].style.color = 'red'
      } else if (this.state.pb === '666') {
        gt[2].style.color = 'black'
      } else if (this.state.pb === '777') {
        gt[3].style.color = 'red'
      } else if (this.state.pb === '999') {
        gt[4].style.color = 'red'
      } else if (this.state.pb === '88') {
        gt[1].style.color = 'red'
      }
    }
    return (
      <div>
        {nb}
      </div>
    )
  }
}
export default SearchGT
