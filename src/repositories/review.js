import mongodb from "../interfaces/mongodb";

const repo = {};

repo.fetchAll = () => {
    return new Promise((resolve, reject) => {
        mongodb.fetchAllFromCollection("review")
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
        mongodb.fetchByIdFromCollection("review", id)
            .then(review => {
                review.images = [];
                mongodb.fetchImagesByReferenceId("review", id)
                    .then(images => {
                        review.images = images.sort((a, b) => new Date(a.post_date).getTime() - new Date(b.post_date).getTime());
                        resolve(review);
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