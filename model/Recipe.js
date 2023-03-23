const mongoose =require('mongoose');

const RecipeSchema  = mongoose.Schema(
  {
    name : {
      type : String,
      required : true
    },
    ingredients : {
      type : String,
    },
    description : {
      type : String,
      required : true
    },
    imageUrl : {
      type : String,
    },
  }
)

module.exports = mongoose.model('recipe',RecipeSchema); 