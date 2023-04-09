import styled, { keyframes } from "styled-components";
import backgroundDesktopImg from '../../assets/home/background-home-desktop.jpg'
import backgroundTabletImg from '../../assets/home/background-home-tablet.jpg'

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
  padding: 212px 55px 40px 55px;
  position: relative;
  background-image: url(${backgroundDesktopImg});
  background-size: cover;
  background-position: right;
  
  @media (max-width: 900px) {
    background-image: url(${backgroundTabletImg});
    padding-top: 130px;
    padding-bottom: 0;
  }
`

export const ItemsContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  animation: ${entranceAnim} .5s ease 0s 1 normal forwards;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    flex-grow: 1;
  }
  
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 500px) {
    padding-bottom: 20px;
  }
  
  span {
    font-size: 28px;
    letter-spacing: 4.72px;
    color: #D0D6F9;
    line-height: 34px;
    
    @media (max-width: 500px) {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
    }
  }

  h1 {
    font-family: 'Bellefair', sans-serif;
    font-weight: 400;
    font-size: 150px;
    line-height: 172px;
    color: #FFFFFF;

    @media (max-width: 500px) {
      font-size: 80px;
      line-height: 100px;

    }
  }

  p {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;;
    max-width: 450px;

    @media (max-width: 500px) {
      font-size: 15px;
      line-height: 25px;
    }

  }

`

export const FowardButtonContainer = styled.div`
  /* width: 50%; */
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: 0;
    background: #FFFFFF;
    font-family: 'Bellefair';
    font-style: normal;
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2px;
    color: #0B0D17;

    padding: 120px 64px;
    border-radius: 50%;
    cursor: pointer;
    transition: all .2s;

    &:hover {
      box-shadow: rgba(225, 255, 255, 0.1) 0px 0px 0px 88px;
    }

    @media (max-width: 900px) {
      padding: 102px 46px;
    }

    @media (max-width: 500px) {
      padding: 68px 27.5px 59px 29.5px;
      font-size: 20px;
      line-height: 23px;

      &:hover, &:active {
        box-shadow: rgba(225, 255, 255, 0.1) 0px 0px 0px 44px;
      }
    }

  }
`