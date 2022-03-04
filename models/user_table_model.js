const db = require('../database')

const user_table = {
    getById: function(id, callback) {
        return db.query(`select * from user_table where id_user=${id}`, callback)
    },
    getAll: function(callback) {
        return db.query('select * from user_table', callback)
    },
    add: function(book, callback) {
        return db.query(`insert into user_table (username, password) values(${user_table.username}, ${user_table.password})`, callback)
    },
    delete: function(id, callback) {
        return db.query(`delete from user_table where id_user=${id}`, callback)
    },
    update: function(id, user_table, callback) {
        return db.query(`update user_table set username=${user_table.username}, password=${user_table.password} where id_user=${id}`, callback)
    }
}

module.exports = user_table