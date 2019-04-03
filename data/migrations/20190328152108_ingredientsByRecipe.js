
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredientsByRecipe', function (table) {
  
    table.increments("ID");

    table
      .string('name',255)
      .notNullable();

    table
        .integer('recipeID') // the column name in this table (users)
        .unsigned()
        .references('ID') // primary key in the related (parent) table (roles)
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    table   
        .integer('ingredients') // the column name in this table (users)
        .unsigned()
        .references('ID') // primary key in the related (parent) table (roles)
        .inTable('ingredientID')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredientsByRecipe");
};
