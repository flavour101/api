import mysql from "mysql";
import config from "../config";

let pool;

const initPool = () => {
    pool = mysql.createPool({
        host: config.db.host,
        port: config.db.port,
        database: config.db.database,
        user: config.db.user,
        password: config.db.password,
        connectionLimit: 100
    })
}

process.on("beforeExit", () => {
    if (pool) pool.end();
})

export const query = (sql) => {
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