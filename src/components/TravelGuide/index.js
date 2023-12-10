import './index.css'

const TravelGuide = props => {
  const {travelGuideDetails} = props
  const {name, imageUrl, description} = travelGuideDetails

  return (
    <li className="list-container">
      <img src={imageUrl} className="image" alt={name} />
      <h1 className="heading">{name}</h1>
      <p className="paragraph">{description}</p>
    </li>
  )
}
export default TravelGuide
