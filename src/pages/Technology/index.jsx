import { Container, Description, DescriptionContainer, DescriptionData, DescriptionSelector, ImageContainer, ItemsContainer, ItemsContainerContent, ItemsContainerTitle } from "./styles"
import { useEffect, useState } from "react"

function Technology() {

  const [jsonData, setJsonData] = useState([])
  const [selection, setSelection] = useState(0)

  useEffect(() => {
    fetch('data.json')
      .then(resp => resp.json())
      .then(data => setJsonData(data.technology))

  }, [])

  return (
    <Container>
      {!jsonData[selection] ? <div></div> :
        <ItemsContainer>
          <ItemsContainerTitle>
            <h2><span>03</span> SPACE LAUNCH 101</h2>
          </ItemsContainerTitle>
          <ItemsContainerContent>
            <DescriptionContainer>
              <Description>
                <DescriptionSelector>
                  <li className={`${selection === 0 ? 'selected' : ''}`} onClick={() => setSelection(0)}>1</li>
                  <li className={`${selection === 1 ? 'selected' : ''}`} onClick={() => setSelection(1)}>2</li>  
                  <li className={`${selection === 2 ? 'selected' : ''}`} onClick={() => setSelection(2)}>3</li>
                </DescriptionSelector>
                <DescriptionData>
                  <span>THE TERMINOLOGY...</span>
                  <h1>{jsonData[selection] ? jsonData[selection].name : ''}</h1>
                  <p>{jsonData[selection] ? jsonData[selection].description : ''}</p>
                </DescriptionData>
              </Description>
            </DescriptionContainer>
            <ImageContainer>
              <picture>
                <source media="(max-width: 900px)" srcSet={jsonData[selection].images.landscape} />
                <img src={jsonData[selection].images.portrait} alt={jsonData[selection].name} />
              </picture>
            </ImageContainer>
          </ItemsContainerContent>
        </ItemsContainer>
      }
    </Container>
  )
}

export default Technology