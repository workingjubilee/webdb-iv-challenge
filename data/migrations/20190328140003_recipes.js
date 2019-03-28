
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function (table) {
  
    table.increments();

    tbl
      .string('name',255)
      .notNullable()
      .unique();

    table
        .integer('dishId') // the column name in this table (users)
        .unsigned()
        .references('id') // primary key in the related (parent) table (roles)
        .inTable('dishes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
};

exports.down = function(knex, Promise) {
  
};

// 3 categories:
// dishes: has recipes;


//   dishes
//   ingredients
//   recipes


// { key: value }?
// dish  : recipe
//       : recipe
//       : recipe
//   one to many relationship
// table 1 dishes:
//   id1: pizza

// table 2 recipes:
//   id1: hawaiian; dishId1;
//   id2: margherita; dishId1;

//   table 3 ingredients:

// ingredientName: "gram of butter" (string), quantity (number)
//  = "{quantity} gram of butter"
// OR
// ingredientName: id (key), "butter" (string), unit: "gram" (string), quantity (number) <--- probably?
//  = "{quantity} {unit} of butter"
//  - when saving the ingredients for a **recipe** capture the quantity required for that **ingredient** as a floating number.

// table 4 recipes used in ingredients
// multiple ingredients can be used in multiple recipes!!
//   foreignKeys: ingredientId, recipeId
//   local: id, quantity?, unit?
//   many : many

// a fully joined table would look like:
//   pizza (id1) : (dishId1) (recipeId1) hawaiian : (recipeId1) : tomatos (ingredientId 1), cheese (ingredientId 2), pineapple (ingredientId 3)
//   pizza (id1) : (dishId1) (recipeId2) margherita : (recipeId2) : tomatos (ingredientId 1), cheese (ingredientId 2), basil (ingredientId4), salt, olive oil
//   Pizza Margherita is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella fior di latte, fresh basil, salt and extra-virgin olive oil. -Wikipedia