import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'
import { useState } from 'react'

function App() {
  
  const [paginaAtual, setPaginaAtual] = useState(sessionStorage.PAGINA_ATUAL)

  return (
    <>
      <Navbar  paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual}/>
      <Body paginaAtual={paginaAtual}/>
      <Footer/>
    </>
  )
}

export default App
