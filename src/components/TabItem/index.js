// Write your code here

import './index.css'

const TabItem = props => {
  const {categoryChange, isActive, eachTab} = props
  const functionChange = () => {
    categoryChange(eachTab.tabId)
  }
  const className = isActive ? 'selected' : 'category'
  return (
    <li className={className}>
      <button className="btn" type="button" onClick={functionChange}>
        {eachTab.displayText}
      </button>
    </li>
  )
}
export default TabItem
