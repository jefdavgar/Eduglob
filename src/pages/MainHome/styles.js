import styled from "styled-components";
import menuOpen from '../../../public/assets/shared/icon-hamburger.svg'
import menuClose from '../../../public/assets/shared/icon-close.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Navbar = styled.nav`
  width: 100%;
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 40px;
  z-index: 3;

  @media (max-width: 900px) {
    top: 0;
  }

  img {
    cursor: pointer;
    transition: all .5s;
    margin-left: 24px;

    @media (max-width: 900px) {
      margin-top: 24px;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  .menu-toggle {
    background-color: transparent;
    background-image: url(${menuOpen});
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 2;
    width: 30px;
    height: 27px;
    margin: 24px 24px 0 0;
    border: none;
    cursor: pointer;
    display: none;

    @media (max-width: 666px) {
      display: block;
    }
  }
  
  .menu-toggle.open {
    background-image: url(${menuClose});    
  }

`

export const NavbarList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 48px;
  padding: 0 7.8vw;
  list-style: none;
  color: white;
  backdrop-filter: blur(15px);
  background: #FFFFFF0A;

  
  @media (max-width: 900px) {
    padding: 0 48px;
  }
  
  @media (max-width: 666px) {
    background: red;
    background: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: min(30vh, 118px) 32px;
    gap: 22px;
    transform: translateX(100%);
    transition: all .2s;
    
    @supports (backdrop-filter: blur(15px)) {
      backdrop-filter: blur(15px);
      background: rgba(255, 255, 255, 0.04);
    }

    &.open {
      width: 255px;
      transform: translateX(0%);
    }
  }


  li {
    padding: 38px 0;
    cursor: pointer;
    letter-spacing: 3px;
    position: relative;
    
    @media (max-width: 666px) {
      padding: 10px 0;
    }

    span {
      font-weight: 700;
      margin-right: 5px;
      
      @media (max-width: 900px) {
        display: none;
      }

      @media (max-width: 666px) {
        display: inline;
      }

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