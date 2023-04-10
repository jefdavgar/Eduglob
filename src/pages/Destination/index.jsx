import { useState, useEffect } from "react"
import { Container, ImageContainer, ItemsContainer, ItemsContainerContent, ItemsContainerTitle, PlanetData, PlanetDataInfos, PlanetDataSelector } from "./styles"

function Destination() {

  const [jsonData, setJsonData] = useState([])
  const [planet, setPlanet] = useState(0)

  useEffect(() => {
    fetch('data.json')
      .then(resp => resp.json())
      .then(data => setJsonData(data.destinations))

  }, [])

  return (
    <Container>
      {!jsonData[planet] ? <div></div> :
      <ItemsContainer>
        <ItemsContainerTitle>
          <h2><span>01</span> PICK YOUR DESTINATION</h2>
        </ItemsContainerTitle>
        <ItemsContainerContent>
          <ImageContainer>
            <div className="img-container">
              <img src={`${jsonData[planet] ? jsonData[planet].images.webp : ''}`} alt={`${jsonData[planet] ? jsonData[planet].images.webp.substring(1) : ''}`} />
            </div>
          </ImageContainer>
          <PlanetData>
            <PlanetDataSelector>
              {jsonData.map( (dest, index) => {
                return <li key={index} className={`${planet === index ? 'selected' : ''}`} onClick={() => setPlanet(index)}>{dest.name}</li>
              })}
            </PlanetDataSelector>
            <PlanetDataInfos>
              <h1>{jsonData[planet] ? jsonData[planet].name : ''}</h1>
              <p>{jsonData[planet] ? jsonData[planet].description : ''}</p>
              <div className="planet-data-numbers">
                <p><span>AVG. DISTANCE</span>{jsonData[planet] ? jsonData[planet].distance : ''}</p>
                <p><span>EST. TRAVEL TIME</span>{jsonData[planet] ? jsonData[planet].travel : ''}</p>
              </div>
            </PlanetDataInfos>
          </PlanetData>
        </ItemsContainerContent>
      </ItemsContainer>
      }
    </Container>
  )
}

export default Destination