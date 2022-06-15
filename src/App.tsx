import React from 'react'
import { Container } from './components/body/style'
import { Header } from './components/Header'
import { GlobalStyle  } from './styles/globalStyle'

function App() {
// const [list, setList] = []

  return (
    <>
    <Container>
      <Header/>
    </Container>
       <GlobalStyle/>
    </>
  )
}

export default App
