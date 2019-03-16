import mysql from "../interfaces/mysql";
import mongodb from "../interfaces/mongodb";

const repo = {};

repo.fetchAll = () => {
    return new Promise((resolve, reject) => {
        mongodb.fetchAllFromCollection("blog")
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
        mysql.query(`SELECT * FROM blog WHERE post_date IS NOT NULL AND id='${id}'`)
            .then(blogs => {
                const blog = blogs[0];
                blog.images = [];

                mysql.query(`SELECT * FROM image WHERE reference_id='${id}' AND reference_type='blog'`)
                    .then(images => {
                        blog.images = images.sort((a, b) => new Date(a.post_date).getTime() - new Date(b.post_date).getTime());
                        resolve(blog);
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