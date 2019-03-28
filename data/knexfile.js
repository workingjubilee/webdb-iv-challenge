// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './cookbook.db3',
    },
    useNullAsDefault: true, // needed for sqlite
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
    // by default SQLite will not enforce foreign keys
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); // enforce FK
      },
    },
  },
};