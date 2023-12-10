import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelGuide from './components/TravelGuide'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isLoading: true, totalDataList: []}

  componentDidMount() {
    this.getTravelGuidDetails()
  }

  getTravelGuidDetails = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const formateData = data.packages.map(each => ({
        id: each.id,
        imageUrl: each.image_url,
        name: each.name,
        description: each.description,
      }))
      this.setState({isLoading: false, totalDataList: formateData})
      console.log(formateData)
    }
  }

  renderLoadingViewContainer = () => (
    <div data-testId="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderSuccessViewContainer = () => {
    const {totalDataList} = this.state
    return (
      <ul className="list-container">
        {totalDataList.map(e => (
          <TravelGuide key={e.id} travelGuideDetails={e} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">Travel Guide</h1>
        <div className="container">
          {isLoading === true
            ? this.renderLoadingViewContainer()
            : this.renderSuccessViewContainer()}
        </div>
      </div>
    )
  }
}

export default App
