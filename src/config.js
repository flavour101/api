module.exports = {
    port: 8081,
    db: {
        host: process.env.DB_HOST || "localhost",
        port: 3306,
        database: "flavour101",
        user: "root",
        password: ""
    }
}