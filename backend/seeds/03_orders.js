/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('orders').del()
  await knex('orders').insert([
    {order_number: 123, user_id: 1, total_price: 2132},
    {order_number: 456, user_id: 1, total_price: 3139},
    {order_number: 789, user_id: 2, total_price: 4172}
  ]);
};
