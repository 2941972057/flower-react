/**
 * Created by dllo on 17/8/29.
 */
/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import '../../assets/styles/index/BodyGt.styl'
class Explores extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: 2
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
                data: response
              })
            })
  }

  render () {
    const object = this.state.data.recommends
    const titleArr = []

    for (const key in object) {
      if (object[key].type === 'explores') {
        // console.log(object[key].type)
        var title = object[key].title
        titleArr.push(title)
      }
    }

    return (
      <div className='flowLgt'>
        <div className='rlDiv'>
          <p className='pantT'>兴趣</p>
          <a className='titlep'>{titleArr[0]}</a>
        </div>
      </div>
    )
  }
}
export default Explores
