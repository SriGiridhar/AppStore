// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  return (
    <li className="app">
      <img className="image" src={eachApp.imageUrl} alt={eachApp.category} />
      <p>{eachApp.appName}</p>
    </li>
  )
}
export default AppItem
