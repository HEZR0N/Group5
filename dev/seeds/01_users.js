/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {name: "john smith", email: "jsmith@gmail.com", hash: "1234"},
    {name: "jane doe", email: "jdoe@gmail.com", hash: "12345"},
    {name: "admin user", email: "admin@gmail.com", hash: "group5isalive"}
  ]);
};
