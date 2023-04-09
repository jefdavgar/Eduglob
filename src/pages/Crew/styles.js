import styled, { keyframes } from "styled-components";
import backgroundDesktopImg from '../../assets/crew/background-crew-desktop.jpg'
import backgroundTabletImg from '../../assets/crew/background-crew-tablet.jpg'

const entranceAnim = keyframes`
  0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`;

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 130px 24px 0px 24px;
  position: relative;
  background-image: url(${backgroundDesktopImg});
  background-size: cover;
  overflow: hidden;
  
  @media (max-width: 900px) {
    background-image: url(${backgroundTabletImg});
  }
`

export const ItemsContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${entranceAnim} .5s ease 0s 1 normal forwards;
`

export const ItemsContainerTitle = styled.div`
  width: 100%;

  @media (max-width: 500px) {
    text-align: center;
  }

  h2 {
      font-weight: 400;
      font-size: 28px;
      line-height: 34px;
      letter-spacing: 4.725px;
      text-transform: uppercase;
      color: #FFFFFF;
      align-self: flex-start;

      @media (max-width: 500px) {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
      }
      
      span {
        font-weight: 700;
        font-size: 28px;
        line-height: 34px;
        letter-spacing: 4.725px;
        color: #FFFFFF;
        opacity: 0.25;

        @media (max-width: 500px) {
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 2.7px;
        }
      }
    }
`

export const ItemsContainerContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 515px;
  
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-top: 60px;
    text-align: center;
  }

  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
  
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    .span {
      font-size: 16px;
      line-height: 18px;
    }

    h1 {
      font-size: 24px;
      line-height: 28px;
    }

    p {
      font-size: 15px;
      line-height: 25px;
    }
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  /* max-height: 515px; */
  /* penis */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    margin-top: 40px;
    border-bottom: 1px solid #383B4B;
  }
  
  @media (max-width: 500px) {
    margin-bottom: 40px;
    margin-top: 0;
    width: 100%;
  }

  img {
    border-bottom: 1px solid #383B4B;
    height: -webkit-fill-available;

    @media (max-width: 900px) {
      height: auto;
      width: 50%;
      border: none;
    }

  }
`
