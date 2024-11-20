module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'devburger',
    database: 'devclub',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
}