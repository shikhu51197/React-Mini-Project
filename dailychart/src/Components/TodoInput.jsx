import { Input ,Container,Heading, Box , Button} from '@chakra-ui/react'
import React, { useEffect , useState } from 'react'
import { addtodo, deletetodo, gettodo, toggletodo } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegTrashAlt } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { MdRadioButtonChecked } from "react-icons/md";
import { Link } from 'react-router-dom';

const TodoInput = () => {

const {todo} = useSelector((state)=>state)
console.log(todo)
const dispatch = useDispatch()


const [task , setTask] = useState('')




const handleclick = ()=> {

  if(task){
    const newtodo={
      title:task ,
      status:false 
    }
    dispatch(addtodo(newtodo))
      dispatch(gettodo())
  }
  
  console.log("Todo" , task)
  setTask('')
}


useEffect(()=> {

  dispatch(gettodo())
}, [])

const handleToggle= (id,status) =>{
  if(id){
      dispatch(toggletodo(id, !status))
      .then(() => dispatch(gettodo()))
  }
}

const handleDelete=(id) =>{
  if(id){
     dispatch(deletetodo(id))
     .then(() => dispatch(gettodo()))
  }
}

  return (
    <div>
      <Container p='10' border= '2px solid black' bg='whitesmoke'>
      <Box ><Heading>DailyChart App</Heading></Box>
      <Box display='flex' pt='50px' gap='5'>
        <Input type="text" placeholder="Enter Todo here"  value={task}  onChange={(e)=> setTask(e.target.value)} />
        <Button colorScheme='green' onClick={handleclick}>Add Todo</Button>
        </Box>


      </Container>

      {todo.length>0 && todo.map((item , index)=>{
        return  <tr key={item.id}>
              <td>
                <Link to={`/todos/${item.id}`} style={{textDecoration:"none",fontSize:"25px",fontStyle:"cursive",fontWeight:'bold'}}>
                {item.title}
                </Link>
              </td>
              <td 
              style={{color : item.status ? 'green' : 'red',fontSize:"20px",fontWeight:"600",fontStyle:"cursive"}}
              >{item.status ? "Completed" : "Not Completed"}</td>
              <td>
                <button 
                onClick={() =>handleToggle(item.id, item.status)}
                style={{fontSize:"20px",padding:"10px 20px",backgroundColor:'lightyellow',borderRadius:"5px"}}
                ><MdRadioButtonChecked /></button>
              </td>
              <td>
                <Link to={`/todos/${item.id}/edit`}>
                <button style={{padding:"10px 30px", background:"blue",borderRadius:"5px",fontSize:"20px"}}><HiPencil /></button>
                </Link>
              </td>
              <td >
                <button onClick={() => handleDelete(item.id)}style={{padding:"10px 30px", backgroundColor:"coral",borderRadius:"5px",fontSize:"20px"}}><FaRegTrashAlt /></button>
              </td>
            </tr>
   
      })}
    </div>
  )
}

export default TodoInput