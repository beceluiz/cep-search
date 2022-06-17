import {useState} from 'react'
import { Container } from './components/body/style'
import { Header } from './components/Header'
import { ListItem } from './components/ListItem'
import { GlobalStyle  } from './styles/globalStyle'
import { Item } from './types/Item'
import { AddArea } from './components/AddArea'


function App() {

  let id = 0;
function getId() {
  return id++;
}

const [list, setList] = useState<Item[]>([
  {
    id: getId(),
    name: 'Clear my room', 
    done: false,
  },
   {
id: getId(),
name:'go to the market',
done: true,
  }
])

function handleAddTasks (taskName : string) {
  let newList = [...list];
  newList.push({
    id: getId(),
    name: taskName,
    done:false
  });
  setList(newList)
}

  return (
    <>
    <Container>
      <Header/>
         <AddArea onEnter={handleAddTasks} />
      {list.map((item, index) =>{
        return <ListItem key={index} item={item}/>
      })}
    </Container>

       <GlobalStyle/>
    </>
  )
}

export default App
