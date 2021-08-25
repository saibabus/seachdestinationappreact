// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchinginput = event => this.setState({searchInput: event.target.value})

  render() {
    const {searchInput} = this.state

    console.log(searchInput)
    const {initialDestinationsList} = this.props
    const searchInputResults = initialDestinationsList.filter(eachitem =>
      eachitem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    // console.log(initialDestinationsList)

    return (
      <div className="mainbgcontainer">
        <div className="destinationContent">
          <h1 className="heading">Destination Search</h1>
          <div className="searchContainer">
            <input
              type="search"
              className="search_input"
              value={searchInput}
              onChange={this.searchinginput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-icon"
              alt="search icon"
            />
          </div>
          <ul className="destinationitemscontainer">
            {searchInputResults.map(each => (
              <DestinationItem destinationDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
