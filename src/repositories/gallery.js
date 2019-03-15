import mysql from "../interfaces/mysql";

const repo = {};

repo.fetchAll = () => {
    return new Promise((resolve, reject) => {
        let promises = [];

        promises.push(
            mysql.query("SELECT * FROM image WHERE post_date IS NOT NULL ORDER BY post_date DESC")
                .catch(error => {
                    reject(error);
                })
        )

        // TODO - Get Instagram photos

        let response = [];
        Promise.all(promises).then(values => {
            response = response.concat(...values);

            response.sort((a, b) => new Date(b.post_date).getTime() - new Date(a.post_date).getTime())

            // TODO - Sort response

            resolve(response);
        })
    })
}

export default repo;