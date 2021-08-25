// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <li className="eachdestination">
      <img src={imgUrl} className="destinationimg" alt={name} />
      <p className="nameofitem">{name}</p>
    </li>
  )
}

export default DestinationItem
