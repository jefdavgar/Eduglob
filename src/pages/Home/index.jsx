import { Container, DescriptionContainer, FowardButtonContainer, ItemsContainer } from "./styles"

function Home({exploreFunction}) {
  return (
    <Container>
      <ItemsContainer>
        <DescriptionContainer>
          <h1>EduGlobo</h1>
          <p>Nuestra solución tiene como objetivo no solo cerrar la brecha digital, sino también garantizar que todas las personas, sin importar su ubicación o circunstancias, tengan la oportunidad de participar en el aprendizaje y el desarrollo a través de una conectividad amplia y accesible. Creemos firmemente que al implementar esta solución, estaremos haciendo una contribución significativa al progreso social y al empoderamiento de las comunidades menos privilegiadas.</p>
        </DescriptionContainer>
        <FowardButtonContainer>
          <button onClick={exploreFunction}>EXPLORA</button>
        </FowardButtonContainer>
      </ItemsContainer>
    </Container>
  )
}

export default Home