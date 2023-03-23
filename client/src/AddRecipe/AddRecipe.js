import React,{useState,useContext} from 'react';
import { useNavigate } from'react-router-dom';
import RecipeContext from '../context/RecipeContext';
//import styles from './Addrecipe.module.css';
import './Addrecipe.css'
import {addNewRecipe} from '../context/RecipeState';
 
const AddRecipe = () => {
  const recipeContext = useContext(RecipeContext);
  const recipeNavigate = useNavigate();
  const [newReceipe,setnewReceipe] = useState({
    name:'',
    ingredients:'',
    description:'',
    imageUrl:'https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  });

  const [errorState,seterrorState] = useState(false);
 
  const HandleChange=(e)=>{
    setnewReceipe({...newReceipe,[e.target.id]:e.target.value});
//    console.log("handle change");  
  }
 
  const HandleSubmit=(e)=>{

    var allFieldsvalid = true;
    e.preventDefault();

    // Recipe name error handler
    if((newReceipe.name==='')||(newReceipe.ingredients==='')||(newReceipe.description===''))
    { 
      console.log("empty field");
      seterrorState(true);
      setTimeout(()=>{
      seterrorState(false)},5000);
      allFieldsvalid=false;
    }
    if(allFieldsvalid===true)
    {
      console.log("Inside allFieldsvalid===true");
      //recipeContext.AddRecipeToDB(newReceipe);
      addNewRecipe(recipeContext.dispatch,newReceipe);
      setnewReceipe(
        { 
          name:'',
          ingredients:'',
          description:'',
          imageUrl:'https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        });
        seterrorState(false);
        //navigate to home page
        recipeNavigate('/');
    }

  }
  return (
    <div className='addcontainer'>
    <p className='addHeader'>Add your delicious recipe here...</p>
    <form className='Addform' onSubmit={HandleSubmit}></form>
      <div >
      <label htmlFor="name">Recipe Name:</label>
      <input className='recipename'id="name" name ="recipename" type="text" value={newReceipe.name} onChange={HandleChange}></input> 
      </div>
      <br/>
      <div >      
      <label htmlFor="ingredients">Ingredients:</label>
      <textarea className='Ingredients' id="ingredients" name ="Recipeingreds" type="text" value={newReceipe.ingredients} onChange={HandleChange}>
      </textarea> 
      </div>
      <br/>
      <div >
      <label htmlFor="description">description:</label>
      <textarea className='description' id="description" name ="Recipedesc" type="text" value={newReceipe.description} onChange={HandleChange}>
      </textarea> 
      </div>
      <br/>
      <div >
      <label htmlFor="imageUrl">Image Url:</label>
      <input className='imageUrl'id="imageUrl" name ="imageUrl" type="text" value={newReceipe.imageUrl} onChange={HandleChange}></input> 
      </div>
      <div className='addBtn'>
      <button className='SubmitForm' onClick={HandleSubmit}>Submit</button>
      </div>
      <div>
      {errorState ? <p className='ErrorField'>**Recipe Name,Ingredients,description should not be empty</p>:null}
      </div>
    <form/>
    </div>
  )
}
export default AddRecipe;