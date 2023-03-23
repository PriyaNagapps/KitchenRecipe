import React from 'react';
import styles from './RecipeCard.module.css'
import { Link } from 'react-router-dom';

const RecipeCard =(props) => {
  console.log("inside recipe card");
  const RecipeItem = props.recipe;
  return(
    <div>
    <div className={styles.container}>
      <img className={styles.image} src={RecipeItem.imageUrl}/>
      <h3 className={styles.recipeName}>{RecipeItem.name}</h3>
      <p className={styles.description}>{RecipeItem.description.substring(0,100)}...</p>
    </div>
    <Link to={`/${RecipeItem._id}`} className={styles.viewMore}>
      ViewMore
    </Link>

    </div>
  )
  
}
export default RecipeCard
