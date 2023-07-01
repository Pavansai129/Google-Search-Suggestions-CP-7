// Write your code here
const SuggestionItem = props => {
  const {suggestion} = props
  return (
    <li>
      <p>{suggestion}</p>
    </li>
  )
}

export default SuggestionItem
