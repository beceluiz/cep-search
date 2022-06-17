import {useState} from 'react'
import { Container } from './components/body/style'
import { Header } from './components/Header'
import { ListItem } from './components/ListItem'
import { GlobalStyle  } from './styles/globalStyle'
import { Item } from './types/Item'
import { AddArea } from './components/AddArea'


function App() {
const [list, setList] = useState<Item[]>([
  {
    id: 1,
    name: 'Clear my room', 
    done: false,
  },
   {
id: 2,
name:'go to the market',
done: true,
  }
])

  return (
    <>
    <Container>
      <Header/>
      {/* new item area */}
         <AddArea/>
      {list.map((item, index) =>{
        return <ListItem key={index} item={item}/>
      })}
    </Container>

       <GlobalStyle/>
    </>
  )
}

export default App
