//import React from 'react';
//import RecipeContext from "../context/RecipeContext";

import { GET_RECIPES,ADD_RECIPE,DELETE_RECIPE } from "./types";


const RecipeReducer = (state,action)=>
{

  switch(action.type){
    case GET_RECIPES :
      return {...state,RecipeList : action.payload};
    case ADD_RECIPE:
      {
        return{...state,RecipeList:[action.payload,...state.RecipeList]};
      }
      case DELETE_RECIPE:
      {
        return {...state,RecipeList:state.RecipeList.filter((item)=>
                                          item.id !==action.payload)};
      }
    default:
      return state;
  }
}
export default RecipeReducer