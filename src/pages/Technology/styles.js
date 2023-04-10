import styled, { keyframes } from "styled-components";
import backgroundDesktopImg from '../../../public/assets/technology/background-technology-desktop.jpg'
import backgroundTabletImg from '../../../public/assets/technology/background-technology-tablet.jpg'
import backgroundMobileImg from '../../../public/assets/technology/background-technology-mobile.jpg'

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
  justify-content: flex-end;
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
  height: 527px;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    height: auto;
  }
`

export const DescriptionContainer = styled.div`
  max-width: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 75px;
  }

`

export const DescriptionSelector = styled.ul`
  /* border: 1px solid red; */
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 900px) {
    flex-direction: row;
    gap: 16px;
    margin-bottom: 44px;
  }

  @media (max-width: 500px) {
    gap: 16px;
  }
  
  li {
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    text-align: center;
    letter-spacing: 2px;
    color: #FFFFFF;
    border: 1px solid #FFFFFF77;
    padding: 22px 31.5px 21px 32.5px;
    border-radius: 50%;
    transition: all .2s;
    cursor: pointer;

    
    &:hover {
      border-color: #FFFFFF;
    }
    
    @media (max-width: 900px) {
      font-size: 24px;
      padding: 16px 28px;
    }
    
    @media (max-width: 500px) {
      font-size: 16px;
      line-height: 18px;
      padding: 11px 16px;
    }
  }

  .selected {
    border-color: #FFFFFF;
    background: #FFFFFF;
    color: #0B0D17;
  }
`

export const DescriptionData = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 5px 15px;

  span {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #D0D6F9;
    display: block;
    margin-bottom: 11px;

    @media (max-width: 500px) {
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 2.36px;
    }
  }

  h1 {
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 11px;

    @media (max-width: 500px) {
      font-size: 24px;
      line-height: 28px;
    }
  }

  p {
    font-family: 'Barlow';
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;

    @media (max-width: 500px) {
      font-size: 15px;
      line-height: 25px;
    }
  }

`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 900px) {
    img {
      width: 97vw;
      margin: 58px auto;
    }
  }
`