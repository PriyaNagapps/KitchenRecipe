const express = require('express');
const {check,validationResult} = require('express-validator');
const Recipe = require('../model/Recipe');
const router = express.Router();

//@route GET /api/recipe
//@desc  Get all the recipes from db
//@access public

router.get('/',async(req,res) => {
  try {
    const recipes = await Recipe.find();
    console.log("Recipes are : ",recipes);
    res.json(recipes);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route POST /api/recipe
//@desc  Post new recipe to db
//@access public

router.post('/',
            check('name','Recipename is requires').not().isEmpty(),
            check('description','Description about recipe is missing').not().isEmpty(),
            async(req,res) =>{
console.log("Recahed post request");
  const errors = validationResult(req);
  if(!errors.isEmpty){
    return res.status(400).json({errors:errors.array()});
  } 
  const {name,ingredients,description,imageUrl} =req.body;
  try {

    const newRecipe = new Recipe({
      name : name,
      ingredients:ingredients,
      description : description,
      imageUrl : imageUrl
    });
    const recipe = await newRecipe.save();
    res.json(recipe);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");    
  }
});

//@route PUT /api/recipe/:id
//@desc  update recipe to db
//@access public

router.put('/:id',async(req,res) =>{

  const {name,ingredients,description,imageUrl} =req.body;
  const UpdateRecipe ={};
  if(name) UpdateRecipe.name = name;
  if(ingredients) UpdateRecipe.ingredients = ingredients;
  if(description) UpdateRecipe.description = description;
  if(imageUrl) UpdateRecipe.imageUrl = imageUrl;

  try {

    const recipe = await Recipe.findByIdAndUpdate(req.params.id,
                                                  {$set :UpdateRecipe},
                                                  {new :true});
    res.json(recipe);                                              
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");      
  }
});

//@route DELETE /api/recipe/:id
//@desc  delete the recipes from db
//@access public

router.delete('/:id',async(req,res) => {
  try {
    await Recipe.findByIdAndRemove(req.params.id)
    res.json({msg:'recipe removed'});

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;