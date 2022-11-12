import {useState} from 'react'
import { Item } from './types/Item'
import * as C from './App.styles'
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

/* App classico */
const  App = () => {

  /* Responsavel por definir e controlar nossa lista   */
  const [list, setList] = useState<Item[]>([
    {id:1, name: ' Comprar bolo', done: false},
    {id:2, name: ' Comprar fralda', done: true},
    {id:3, name: ' Comprar trigo', done: true},
    {id:4, name: ' Comprar pão', done: false},
  ]);

    /* Responsavel por adicionar uma nova tarefa */
  const handleAddTask = (taskName : string ) =>{
    let newList = [...list];
    newList.push({

      /* Id aleatorio pra que? Conta quantos itens tem e adiciona mais 1 :D */
      id: list.length + 1 ,
      name: taskName,
      done : false

    });
    setList(newList);
  }

  return(
    <>
    {/* Visualisação da lista de tarefas */}
    <C.Container>
      <C.Area> 
        <C.Header>Lista de tarefas</C.Header>

        {/* add new task */}

        <AddArea onEnter={handleAddTask} />
        {list.map(
            (item, index) => (
              <ListItem key={index}  item={item} />
            )
          )
        }



        {/* list tasks */}

    
      </C.Area>
    </C.Container>


    </>
  );

}


export default App;