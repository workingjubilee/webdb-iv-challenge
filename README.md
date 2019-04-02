# Recipe Book

## Topics

- database modeling.
- migration scripts.
- seeding.
- knex.

## Assignment

Design the **data model** for a _recipe book_ application, then use `Knex migrations and seeding` functionality to build a `SQLite3` database based on the model and seed it with test data.

The requirements for the system, as stated by the client are:

3 categories:
dishes: has recipes;


  dishes
  ingredients
  recipes


{ key: value }?
dish  : recipe
      : recipe
      : recipe
  one to many relationship
table 1 dishes:
  id1: pizza

table 2 recipes:
  id1: hawaiian; dishId1;
  id2: margherita; dishId1;

the joined table would look like:
  pizza (id1) : (dishId1) (recipeId1) hawaiian
  pizza (id1) : (dishId1) (recipeId2) margherita

- have a way to manage dishes. A **dish** is something the client wants to cook, like _pizza_ or _tacos_.
- have a way to manage recipes. A **dish** can have different recipes for tacos, like _tex-mex_ or _granny's_. A **recipe** belongs only to one **dish**.


dish : [...recipes]


recipe: has instructions, ingredients

- have a way to save instructions for cooking a recipe.
- a **recipe** could have more than one **ingredient** and the same **ingredient** can be used in multiple recipes. Examples are _"cup of corn flour"_ or _"gram of butter"_.

recipe  : ingredient
        : ingredient
        : ingredient
        one to many relationship?

table 3 ingredients:

ingredientName: "gram of butter" (string), quantity (number)
 = "{quantity} gram of butter"
OR
ingredientName: id (key), "butter" (string), unit: "gram" (string), quantity (number) <--- probably?
 = "{quantity} {unit} of butter"
 - when saving the ingredients for a **recipe** capture the quantity required for that **ingredient** as a floating number.

table 4 recipes used in ingredients
multiple ingredients can be used in multiple recipes!!
  foreignKeys: ingredientId, recipeId
  local: id, quantity?, unit?
  many : many


Router/DB operations:
- CRUD on dishes/recipes/ingredients/ingredient-by-recipe
- have a way to pick a **dish** and a **recipe** and get a _shopping list_ with all the ingredients, and quantity of each, needed to cook the **dish**. (cookbook/dish/:id/recipe/go-shopping endpoint?)
- add a method called `getRecipe(id)` to your data access library that should return the recipe with the provided `id`. The recipe should include:
  - name of the dish.
  - name of the recipe.
  - the list of ingredients with the quantity.
  - add a `getShoppingList(recipeId)` that returns a list of all the recipe's ingredients including the quantity of each.

In addition to the `migrations` and `seeding` scripts, write a data access (a la "actionModel.js") file that **exports** an object with the following functions:

- `getDishes()`: should return a list of all dishes in the database.
- `addDish(dish)`: should add the **dish** to the database and return the `id` of the new **dish**.
- `getDish(id)`: should return the **dish** with the provided `id` and include a list of the related recipes.
- `getRecipes()`: should return a list of all recipes in the database including the **dish** they belong to.
- `addRecipe(recipe)`: should add a **recipe** to the database and return the `id` of the new **recipe**.

Organize and name your files anyway you see fit.

## Stretch Problems

- design and build a RESTful API that makes use of your data access file and publishes endpoints that a client application can use to manage all resources.
- add a method called `getRecipe(id)` to your data access library that should return the recipe with the provided `id`. The recipe should include:
  - name of the dish.
  - name of the recipe.
  - the list of ingredients with the quantity.
- follow the same pattern to add the CRUD operations for other entities in the system.
- add _units of measure_ support for the **ingredient**s.
- design and build a front end client for your API.
- add a `getShoppingList(recipeId)` that returns a list of all the recipe's ingredients including the quantity of each.
