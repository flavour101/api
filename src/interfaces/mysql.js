import mysql from "mysql";
import config from "../config";

let pool;
const db = {};

const initPool = () => {
    pool = mysql.createPool({
        host: config.db.host,
        port: config.db.port,
        database: config.db.database,
        user: config.db.user,
        password: config.db.password,
        connectionLimit: 100,
        timezone: "utc"
    })
}

process.on("beforeExit", () => {
    if (pool) pool.end();
})

db.test = () => {
    if (!pool) initPool();
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SHOW TABLES", error => {
            if (error) reject(error);
            console.log("DB Connection Successful!");
            con.release();
        });
    })
}

db.query = (sql) => {
    if (!pool) initPool();
    return new Promise(((resolve, reject) => {

        pool.getConnection((err, con) => {
            if (err) reject(err);

            con.query(sql, (error, results) => {
                if (error) reject(error);

                con.release();
                resolve(results);
            })
        })
    }))
}

export default db;