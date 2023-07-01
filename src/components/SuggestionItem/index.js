// Write your code here
const SuggestionItem = props => {
  const {suggestion, onSelectingSuggestion} = props
  const onArrowClick = () => {
    onSelectingSuggestion(suggestion)
  }
  return (
    <li>
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onArrowClick}
      />
    </li>
  )
}

export default SuggestionItem
