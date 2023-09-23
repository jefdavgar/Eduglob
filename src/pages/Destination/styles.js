import styled, { keyframes } from "styled-components";
import backgroundDesktopImg from '../../../public/assets/destination/background-destination-desktop.jpg'
import backgroundTabletImg from '../../../public/assets/destination/background-destination-tablet.jpg'
import backgroundMobileImg from '../../../public/assets/destination/background-destination-mobile.jpg'

const entranceAnim = keyframes`
  0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`;

const planetAnim = keyframes`
  0% {
		transform: rotate(0);
	}

	100% {
		transform: rotate(0deg);
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
  
  @media (max-width: 900px) {
    background-image: url(${backgroundTabletImg});
  }

  @media (max-width: 500px) {
    background-image: url(${backgroundMobileImg});
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
  padding: 0;
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
  justify-content: space-evenly;
  margin-top: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }

`

export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  overflow: hidden;
  
  @media (max-width: 900px) {
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    animation: ${planetAnim} 20s linear 0s infinite normal forwards;
  }

`

export const PlanetData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 15px;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const PlanetDataSelector = styled.ul`
  width: 100%;
  display: flex;
  gap: 36px;
  list-style: none;
  
  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 500px) {
    gap: 26px;
  }

  li {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    padding-bottom: 15px;
    color: #D0D6F9;
    position: relative;
    cursor: pointer;

    @media (max-width: 500px) {
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 2.36px;
    }

    &:after {
      content: '';
      position: absolute;
      background: white;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      transition:  .2s;
      opacity: 0.5;
      transform: scaleX(0);
    }

    &:hover:after {
      transform: scaleX(1);
    }
  }

  .selected {
    &:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }

`

export const PlanetDataInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 37px;

  @media (max-width: 900px) {
    justify-content: center;
    text-align: center;
  }

  h1 {
    align-self: flex-start;
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 115px;
    color: #FFFFFF;
    text-transform: uppercase;

    @media (max-width: 900px) {
      align-self: center;
    }

    @media (max-width: 500px) {
      font-size: 56px;
      line-height: 64px;
    }

  }

  p {
    font-family: 'Barlow';
    max-width: 450px;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
    margin-bottom: 54px;

    @media (max-width: 768px) {
      max-width: 100%;
    }

    @media (max-width: 500px) {
      font-size: 15px;
      line-height: 25px;
    }

  }

  .planet-data-numbers {
    width: 100%;
    padding-top: 28px;
    border-top: 1px solid #383B4B;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 500px) {
      flex-direction: column;
    }

    p {
      display: flex;
      flex-direction: column;
      gap: 12px;
      font-family: 'Bellefair';
      font-style: normal;
      font-size: 28px;
      line-height: 32px;
      text-transform: uppercase;
      color: #FFFFFF;

      span {
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 2.3625px;
        text-transform: uppercase;
        color: #D0D6F9;
      }
    }

  }
`