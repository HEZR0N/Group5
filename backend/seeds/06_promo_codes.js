/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('promo_codes').del()
  await knex('promo_codes').insert([
    {code: 'super-save'}
  ]);
};
