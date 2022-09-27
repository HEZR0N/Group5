/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments()
        table.text('n3me', 128)
        .notNullable()
        table.timestamps(true, true)
    })
    .createTable('messages', table => {
        table.increments()
        table.string('sender')
            .notNullable()
            .index()
        table.text('text')
        table.timestamps(true, true)
        // Foreign key info to 'users' table
        table.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('messages').dropTableIfExists('users')
};
