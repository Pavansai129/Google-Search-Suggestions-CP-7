// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSelectingSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const input = searchInput.toLowerCase()
    const {suggestionsList} = this.props
    const filteredSuggestionsList = suggestionsList.filter(each => {
      const search = each.suggestion.toLowerCase()
      if (search.includes(input)) {
        return true
      }
      return false
    })
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
            <input
              type="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
          <div className="suggestions">
            <ul>
              {filteredSuggestionsList.map(each => (
                <SuggestionItem
                  key={each.id}
                  suggestion={each.suggestion}
                  onSelectingSuggestion={this.onSelectingSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
