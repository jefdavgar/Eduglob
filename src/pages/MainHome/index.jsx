import { Container, Navbar, NavbarList } from "./styles"
import siteLogo from '../../../public/assets/shared/logo1.svg'
import { useState } from "react"
import Home from "../Home/index"
import Destination from "../Destination"
import Crew from "../Crew"
import Technology from "../Technology"

function MainHome() {
  const [currentPage, setCurrentPage] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const exploreFun = () => {
    setCurrentPage(1)
  }
  
  return (
    <Container>
      <Navbar>
        <img src={siteLogo} alt="Site Logo" onClick={() => {
          setCurrentPage(0)
          setMenuOpen(false)
        }} />
        <button className={`menu-toggle ${menuOpen === true && 'open'}`} onClick={() => setMenuOpen(current => !current)}></button>
        <NavbarList className={`${menuOpen === true && 'open'}`}>
          <li className={`${currentPage === 0 ? 'selected' : ''}`} onClick={() => {
            setCurrentPage(0)
            setMenuOpen(false)
          }}><span>00</span> INICIO</li>
          <li className={`${currentPage === 1 ? 'selected' : ''}`} onClick={() => {
            setCurrentPage(1)
            setMenuOpen(false)
          }}><span>01</span> DATOS</li>
          <li className={`${currentPage === 2 ? 'selected' : ''}`} onClick={() => {
            setCurrentPage(2)
            setMenuOpen(false)
          }}><span>02</span> EQUIPO</li>
          <li className={`${currentPage === 3 ? 'selected' : ''}`} onClick={() => {
            setCurrentPage(3)
            setMenuOpen(false)
          }}><span>03</span> PROTOTIPO</li>
        </NavbarList>
      </Navbar>
      {currentPage === 0 && <Home exploreFunction = {exploreFun}/>}
      {currentPage === 1 && <Destination />}
      {currentPage === 2 && <Crew />}
      {currentPage === 3 && <Technology />}
    </Container>
  )
}

export default MainHome