/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cart_items').del()
  await knex('cart_items').insert([
    {item_id: 1, user_id: 1},
    {item_id: 2, user_id: 1},
    {item_id: 3, user_id: 2, quantity: 2},
    {item_id: 4, user_id: 2, quantity: 3}
  ]);
};
