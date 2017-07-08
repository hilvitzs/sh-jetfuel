exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('folders', function(table) {
      table.increments('id').primary();
      table.string('name').unique();
    }),

    knex.schema.createTable('links', function(table) {
      table.increments('id').primary();
      table.string('long_url');
      table.string('short_url').unique();
      table.integer('visits');
      table.integer('folder_id').unsigned();
      table.foreign('link_id')
        .references('folder_id');

      table.timestamps(true, true)
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('folders'),
    knex.schema.dropTable('links')
  ])
};
