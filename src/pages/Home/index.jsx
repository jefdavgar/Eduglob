import { Container, DescriptionContainer, FowardButtonContainer, ItemsContainer } from "./styles"

function Home({exploreFunction}) {
  return (
    <Container>
      <ItemsContainer>
        <DescriptionContainer>
          <span>SO, YOU WANT TO TRAVEL TO</span>
          <h1>SPACE</h1>
          <p>Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!</p>
        </DescriptionContainer>
        <FowardButtonContainer>
          <button onClick={exploreFunction}>EXPLORE</button>
        </FowardButtonContainer>
      </ItemsContainer>
    </Container>
  )
}

export default Home