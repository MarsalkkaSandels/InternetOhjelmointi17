const db = require('../database')

const borrower = {
    getById: function(id, callback) {
        return db.query(`select * from book where id_borrower=${id}`, callback)
    },
    getAll: function(callback) {
        return db.query('select * from borrower', callback)
    },
    add: function(borrower, callback) {
        return db.query(`insert into borrower (fname, lname, streetAddress) values(${borrower.fname}, ${borrower.lname}, ${borrower.streetAddress})`, callback)
    },
    delete: function(id, callback) {
        return db.query(`delete from borrower where id_borrower=${id}`, callback)
    },
    update: function(id, borrower, callback) {
        return db.query(`update book set fname=${borrower.fname}, lname=${borrower.lname}, streetAddress=${borrower.streetAddress} where id_borrower=${id}`, callback)
    }
}

module.exports = borrower