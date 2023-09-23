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
          <h2><span>01</span> Datos que informan</h2>
        </ItemsContainerTitle>
        <ItemsContainerContent>
          <ImageContainer>
            <div className="img-container">
              <iframe width='500' height='500' frameborder='0' scrolling='no' src={jsonData[planet].images.webp} alt={jsonData[planet].name} />
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
                <p><span>1</span>{jsonData[planet] ? jsonData[planet].distance : ''}</p>
                <p><span>2</span>{jsonData[planet] ? jsonData[planet].travel : ''}</p>
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