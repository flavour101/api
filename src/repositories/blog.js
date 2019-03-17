import mongodb from "../interfaces/mongodb";

const repo = {};

repo.fetchAll = () => {
    return new Promise((resolve, reject) => {
        mongodb.fetchAllFromCollection("blog")
            .then(results => {
                results.sort((a, b) => new Date(b.post_date).getTime() - new Date(a.post_date).getTime());
                resolve(results);
            })
            .catch(error => {
                reject(error);
            })
    })
}

repo.fetchById = id => {
    return new Promise((resolve, reject) => {
        mongodb.fetchByIdFromCollection("blog", id)
            .then(blog => {
                blog.images = [];
                mongodb.fetchImagesByReferenceId("blog", id)
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