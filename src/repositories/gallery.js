import mongodb from "../interfaces/mongodb";

const repo = {};

repo.fetchAll = () => {
    return new Promise((resolve, reject) => {
        let promises = [];

        promises.push(
            mongodb.fetchAllFromCollection("gallery")
        )

        // TODO - Get Instagram photos

        let response = [];
        Promise.all(promises).then(values => {
            response = response.concat(...values);
            response.sort((a, b) => new Date(b.post_date).getTime() - new Date(a.post_date).getTime())
            resolve(response);
        })
    })
}

export default repo;