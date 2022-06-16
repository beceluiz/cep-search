import {useState} from 'react'
import { Container } from './components/body/style'
import { Header } from './components/Header'
import { ListItem } from './components/ListItem'
import { GlobalStyle  } from './styles/globalStyle'
import { Item } from './types/Item'


function App() {
const [list, setList] = useState<Item[]>([
  {
    id: 1,
    name: 'sexo', 
    done: false,
  },
   {
id: 2,
name:'punheta',
done: true,
  }
])

  return (
    <>
    <Container>
      <Header/>
      {/* new item area */}

      {list.map((item, index) =>{
        return <ListItem key={index} item={item}/>
      })}
    </Container>

       <GlobalStyle/>
    </>
  )
}

export default App
