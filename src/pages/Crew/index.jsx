import { useEffect, useState } from "react"
import { Container, DescriptionContainer, ItemsContainer, ImageContainer, ItemsContainerContent, ItemsContainerTitle } from "./styles"
import Slider from "./Slider"

function Crew() {

  const [jsonData, setJsonData] = useState([])
  const [member, setMember] = useState(0)

  useEffect(() => {
    fetch('data.json')
      .then(resp => resp.json())
      .then(data => setJsonData(data.crew))

  }, [])

  return (
    <Container>
      {!jsonData[member] ? <div></div> :
        <ItemsContainer>
          <ItemsContainerTitle>
            <h2><span>02</span> MEET YOUR CREW</h2>
          </ItemsContainerTitle>
          <ItemsContainerContent>
            <DescriptionContainer>
              <Slider jsonData = {jsonData} setMember = {setMember} />
            </DescriptionContainer>
            <ImageContainer>  
              <img src={`/src${jsonData[member].images.png.substring(1)}`} alt={`${jsonData[member].images.webp.substring(1)}`} />
            </ImageContainer>
          </ItemsContainerContent>
        </ItemsContainer>
      }
    </Container>
  )
}

export default Crew