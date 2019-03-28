
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredientsList', function (table) {
  
    table.increments();

    table
      .string('name',255)
      .notNullable();

    table
        .integer('recipeId') // the column name in this table (users)
        .unsigned()
        .references('id') // primary key in the related (parent) table (roles)
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    table   
        .integer('ingredients') // the column name in this table (users)
        .unsigned()
        .references('id') // primary key in the related (parent) table (roles)
        .inTable('ingredientsId')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  }
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredientsList");
};
