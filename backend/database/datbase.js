const { createPool } = require("mysql");


const pool = createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "kashif@123987",
    database: "todo",
    multipleStatements: true
});

pool.makeQuery = async (query, args) => {
    
     return new Promise((resolve, reject) => {
         pool.query(query, args, (err, result) => {
             if (err) {
                 reject(err);
             } else {
                 resolve(result);
             }
         });
     });
};

pool.on('connection', () => {
    console.log('Database connection succesfull');
})

module.exports = pool;