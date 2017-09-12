const config = {
    database: 'test',
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASS || '',
    PORT: process.env.PORT || 3500
}

module.exports = config