const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)

// module.exports = new Sequelize('postgres://pswtwefa:L8NocbmPt3VJCtWYz9NuqtHl3n2obfRo@kashin.db.elephantsql.com:5432/pswtwefa', {dialect: 'postgres'})
//postgres://user:pass@example.com:5432/dbname
