import mysql from "../interfaces/mysql";
import mongodb from "../interfaces/mongodb";

const repo = {};

repo.fetchAll = () => {
    return new Promise((resolve, reject) => {
        mongodb.fetchAllFromCollection("recipe")
            .then(results => {
                resolve(results);
            })
            .catch(error => {
                reject(error);
            })
    })
}

repo.fetchById = id => {
    return new Promise((resolve, reject) => {
        mysql.query(`SELECT * FROM recipe WHERE post_date IS NOT NULL AND id='${id}'`)
            .then(recipes => {
                const recipe = recipes[0];
                recipe.images = [];
                mysql.query(`SELECT * FROM image WHERE reference_id='${id}' AND reference_type='recipe'`)
                    .then(images => {
                        recipe.images = images.sort((a, b) => new Date(a.post_date).getTime() - new Date(b.post_date).getTime());
                        resolve(recipe);
                    })
                    .catch(error => {
                        reject(error);
                    })
            })
            .catch(error => {
                reject(error);
            })
    })
}

export default repo;