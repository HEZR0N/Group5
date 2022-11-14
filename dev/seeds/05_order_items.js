/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('order_items').del()
  await knex('order_items').insert([
    {item_id: 6, order_id: 1},
    {item_id: 5, order_id: 1},
    {item_id: 4, order_id: 2, quantity: 2},
    {item_id: 3, order_id: 2, quantity: 3}
  ]);
};
