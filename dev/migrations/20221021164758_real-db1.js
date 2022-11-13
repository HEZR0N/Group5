/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('promo_codes', table => {
        table.string('code').unique()
    })
    .createTable('users', table => {
        table.increments('id')
        table.string('name')
        table.string('email').unique()
        table.string('hash')
        table.boolean('isAdmin')
        table.string('apiToken').unique()
        table.string('promoCode')
            .references('code')
            .inTable('promo_codes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('items', table => {
        table.increments('id')
        table.integer('quantity')
        table.integer('price')
        table.string('name').unique()
        table.string('category')
        table.string('image_url')
    })
    .createTable('orders', table => {
        table.increments('id')
        table.integer('total_price')
        table.string('date')
        table.integer('order_number').unique()
        // table.index('order_number')
        table.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('cart_items', table => {
        table.integer('item_id')
            .unsigned()
            .references('id')
            .inTable('items')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('quantity')
    })
    .createTable('order_items', table => {
        table.integer('order_id')
            .unsigned()
            .references('id')
            .inTable('orders')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('item_id')
            .unsigned()
            .references('id')
            .inTable('items')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('quantity')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cart_items')
    .dropTableIfExists('order_items')
    .dropTableIfExists('orders')
    .dropTableIfExists('users')
    .dropTableIfExists('items')
    .dropTableIfExists('promo_codes')
};
