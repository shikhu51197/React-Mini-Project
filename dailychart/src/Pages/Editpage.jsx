import React , {useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { gettodo  , edittodo} from '../Redux/action'
import { IoMdSkipBackward } from "react-icons/io";
import { NavLink } from 'react-router-dom';
const Editpage = () => {

  const [editData ,setEditData] = useState({})
  const [title , setTitle] = useState('')
  const  {id} = useParams()
console.log(id)

  const dispatch =useDispatch()

  const {todo} = useSelector((state)=> state)
  console.log(todo)
  


useEffect(() => {
    if(todo?.length === 0){
     dispatch(gettodo())
    } 



    const apply=todo &&  todo.find((item) => item.id === Number(id));
    apply && setEditData(apply);


   },[todo,dispatch , id])
 

 
 
  const handleEdit= () =>{
      if(title){
        const newTodo={
          title,
          status: false
        }
        dispatch(edittodo(id,newTodo))
        .then(() => {
          dispatch(gettodo())
        })
      }
  }


  return (
    <div>
      <div>
        <h1 style={{fontStyle:"italic",fontSize:"60px"}}>Title: {editData.title}</h1>lk
      </div>
      <br/>
      <div>
        <input 
        type="text" 
        placeholder='Edit Todo'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{width:"300px",padding:"10px 30px", fontSize:'20px',borderRadius:"8px",border:"2px solid black"}}
        />
        <br></br>
        <br/>
        <button 
        onClick={handleEdit} 
        style={{padding:"10px 20px",fontSize:'18px',backgroundColor:"lightyellow",borderRadius:'5px',fontWeight:"600"}}>Edit</button>
      </div>
      <br/>
      <div>
        <NavLink to='/'>
        <button style={{padding:"10px 20px",fontSize:'20px',backgroundColor:"teal",borderRadius:"8px"}}><IoMdSkipBackward /></button>
        </NavLink>
      </div>
    </div>
  )
}

export default Editpage