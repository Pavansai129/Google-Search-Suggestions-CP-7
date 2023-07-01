// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredSuggestionsList = suggestionsList.filter(each =>
      each.suggestion.includes(searchInput),
    )
    return (
      <div className="app-bg-container">
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input type="search" value={searchInput} />
          </div>
          <div className="suggestions">
            <ul>
              {filteredSuggestionsList.map(each => (
                <SuggestionItem key={each.id} suggestion={each.suggestion} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
