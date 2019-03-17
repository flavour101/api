export default {
    port: process.env.PORT || 8081,
    mysql: {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 3306,
        database: process.env.DB_DATABASE || "flavour101",
        user: process.env.DB_USER || "api-user",
        password: process.env.DB_PASSWORD || ""
    },
    mongodb: {
        cluster: process.env.MONGODB_CLUSTER || "cluster0-ev15b.gcp.mongodb.net",
        user: process.env.MONGODB_USER || "api-user",
        password: process.env.MONGODB_PASSWORD || "N9rL8hQpFhMc",
        db: process.env.MONGODB_DB || "flavour101"
    }
}